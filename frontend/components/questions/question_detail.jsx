import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import VoteBoxContainer from '../votes/vote_box_container';

class QuestionDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUnmount() {
    this.props.removeAnswers();
  }

  componentDidMount() {
    const { questionId } = this.props.match.params;
    this.props.requestSingleQuestion(questionId);
    this.props.requestAllAnswers(questionId);
  }

  renderAnswers() {
    const q = this.props.match.params.questionId;
    const { currentUser } = this.props;
    let active = false;
    return this.props.answers.map((answer, a) => {
      if (currentUser) {
        active = answer.authorId === currentUser.id;
      }
      const { body, id, questionId } = answer;
      return (
        <li key={`answer-${q}-${a}`}>
          <VoteBoxContainer item={answer} itemType="Answer" />
          <div className="answer-box">
            <p className="body">{body}</p>
            { active ? this.renderDelete(id, "answer", questionId) : "" }
          </div>
        </li>
      );
    });
  }

  handleClick(id, type, source) {
    if (type === "question") {
      this.props.deleteQuestion(id);
      this.props.history.push("/");
    } else {
      this.props.deleteAnswer(id);
      this.props.history.push(`/questions/${source}`);
    }
  }

  renderDelete(id, type, source) {
    return (
      <button className="button"
              onClick={() => this.handleClick(id, type, source)}>
        Delete
      </button>
    )
  }

  render() {
    const { questionId } = this.props.match.params;
    const { currentUser } = this.props;
    const question = this.props.questions[questionId];
    let active = false;

    if (!question) {
      return (<Redirect to="/" />);
    } else {
      if (currentUser) {
        active = question.authorId === currentUser.id;
      }
      return (
        <div className="question-answer-container">
          <div className="question-box">
            <VoteBoxContainer item={question} itemType="Question" />
            <div className="question-detail">
              <h1 className="title">{question.title}</h1>
              <p className="body">{question.body}</p>
            </div>
            { active ? this.renderDelete(question.id, "answer") : "" }
          </div>
          <ul className="answers-container">
            { this.renderAnswers() }
          </ul>
        </div>
      );
    }
  }
}

export default withRouter(QuestionDetail);
