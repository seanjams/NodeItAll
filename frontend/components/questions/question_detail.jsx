import React from 'react';
import { Link } from 'react-router-dom';
import VoteBoxContainer from '../votes/vote_box_container';

class QuestionDetail extends React.Component {

  componentDidMount() {
    const { questionId } = this.props.match.params
    this.props.requestSingleQuestion(questionId);
    this.props.requestAllAnswers(questionId);
  }

  renderAnswers() {
    const q = this.props.match.params.questionId;
    return this.props.answers.map((answer, a) => (
      <li key={`answer-${q}-${a}`}>
        <div className="answer-detail">
          <VoteBoxContainer
            itemId={answer.id}
            itemType="Answer"
            voteCount={answer.voteCount}
            currentUserVote={answer.currentUserVote}/>
          <p className="body">{answer.body}</p>
        </div>
      </li>
    ));
  }

  render() {
    const { questionId } = this.props.match.params;
    const question = this.props.questions[questionId];
    if (!question) {
      return (<h1>Loading</h1>);
    } else {
      return (
        <div className="question-detail-container">
          <div className="question-detail">
            <VoteBoxContainer
              itemId={questionId}
              itemType="Question"
              voteCount={question.voteCount}
              currentUserVote={question.currentUserVote}/>
            <div className="question-text">
              <h1 className="title">{question.title}</h1>
              <p className="body">{question.body}</p>
            </div>
          </div>
          <ul className="answers">
            { this.renderAnswers() }
          </ul>
        </div>
      );
    }
  }
}

export default QuestionDetail;
