import React from 'react';
import { Link } from 'react-router-dom';
import VoteBoxContainer from '../votes/vote_box_container';

class QuestionDetail extends React.Component {

  componentDidMount() {
    const { questionId } = this.props.match.params
    this.props.requestSingleQuestion(questionId);
    this.props.requestAllAnswers(questionId);
    this.props.requestAllVotes(questionId, "Question");
  }

  renderAnswers() {
    const q = this.props.match.params.questionId;
    return this.props.answers.map((answer, a) => (
      <li key={`answer-${q}-${a}`}>{answer.body}</li>
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
            <VoteBoxContainer itemId={questionId}
              itemType="Question" voteCount={question.voteCount} />
            <h1>{question.title}</h1>
            <p>{question.body}</p>
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
