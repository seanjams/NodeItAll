import React from 'react';
import { Link } from 'react-router-dom';

class QuestionIndexItem extends React.Component {
  render() {
    const { question } = this.props;
    return (
      <div className="question-index-item">
        <Link to={`api/questions/${question.id}`}>{question.title}</Link>
      </div>
    )
  }
}

export default QuestionIndexItem;
