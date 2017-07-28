import React from 'react';
import { Link } from 'react-router-dom';
import ItemCounts from './item_counts';

class QuestionIndexItem extends React.Component {
  render() {
    const { question } = this.props;
    console.log(question);
    return (
      <div className="question-index-item">
        <ItemCounts question={question} />
        <div className="question-container">
          <Link to={`questions/${question.id}`}>
            <h2 className="question-title">{question.title}</h2>
          </Link>
          <div className="author-info">
            <p>asked by <p className="username">{question.username}</p> {question.time} ago</p>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionIndexItem;
