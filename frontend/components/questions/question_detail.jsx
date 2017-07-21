import React from 'react';
import { Link } from 'react-router-dom';

class QuestionDetail extends React.Component {

  componentWillMount() {
    this.props.requestSingleQuestion(this.props.match.params.questionId);
  }

  render() {
    const { questions, match } = this.props
    const question = questions[match.params.questionId];
    if (!question) {
      return (<h1>Loading</h1>);
    } else {
      return (
        <div className="question-detail">
          <h1>{question.title}</h1>
          <p>{question.body}</p>
          <Link to="/">Back to Questions</Link>
        </div>
      );
    }
  }
}

export default QuestionDetail;
