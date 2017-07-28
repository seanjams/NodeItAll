import React from 'react';
import Highlight from 'react-syntax-highlight';
import { withRouter } from 'react-router-dom';
import VoteBoxContainer from '../votes/vote_box_container';

class QuestionDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUnmount() {
    this.props.removeAnswers();
  }

  componentWillMount() {
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
      const { id, questionId } = answer;
      const body = answer ? answer.body.split("~~$$~~") : ["",""];
      const plain = body[0];
      const code = body[1] || "";
      const isSolo = code === "" ? code : "solo";
      return (
        <li key={`answer-${q}-${a}`}>
          <VoteBoxContainer item={answer} itemType="Answer" />
          <div className="answer-box">
            <div className="author-info">
              <p><span className="username">{answer.username}</span> {answer.time} ago</p>
            </div>
            <div className={`plain-code-container ${isSolo}`}>
              <p>{plain}</p>
              { this.renderCodeBox(code) }
            </div>
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
      <div className="delete-button">
        <button className="button"
                onClick={() => this.handleClick(id, type, source)}>
          Delete
        </button>
      </div>
    );
  }

  renderCodeBox(code) {
    if (code !== "") {
      return (
        <Highlight lang={"javascript"}
          value={code}
          className="code-box" />
      );
    }
  }

  render() {
    const { questionId } = this.props.match.params;
    const { currentUser } = this.props;
    const question = this.props.questions[questionId];
    const body = question ? question.body.split("~~$$~~") : ["",""];
    const plain = body[0];
    const code = body[1] || "";
    const isSolo = code === "" ? code : "solo";
    let active = false;

    if (!question) {
      return (
        <h1>Loading...</h1>
      )
    } else {
      if (currentUser) {
        active = question.authorId === currentUser.id;
      }
      return (
        <div className="question-answer-container">
          <div className="question-box">
            <VoteBoxContainer item={question} itemType="Question" />
            <div className="question-detail">
              <div className="author-info">
                <p><span className="username">{question.username}</span> {question.time} ago</p>
              </div>
              <h1 className="title">{question.title}</h1>
              <div className={`plain-code-container ${isSolo}`}>
                <p>{plain}</p>
                { this.renderCodeBox(code) }
              </div>
              { active ? this.renderDelete(question.id, "question") : "" }
            </div>
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
