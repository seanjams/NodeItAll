import React from 'react';
import { Link } from 'react-router-dom';
import ItemCounts from './item_counts';

class QuestionIndexItem extends React.Component {
  render() {
    const { question } = this.props;
    return (
      <Link to={`questions/${question.id}`}>
        <div className="question-index-item">
          <ItemCounts question={question} />
          <div className="question-container">
            <h2 className="question-title">{question.title}</h2>
            <div className="author-info">
              <p>asked by <span className="username">{question.username}</span> {question.time} ago</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default QuestionIndexItem;
