import React from 'react';
import { Link } from 'react-router-dom';

class QuestionDetail extends React.Component {

  componentWillMount() {
    const { questionId } = this.props.match.params
    this.props.requestSingleQuestion(questionId);
    this.props.requestAllAnswers(questionId);
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
