import React from 'react';

class ItemCounts extends React.Component {

  answerColor() {
    return this.props.question.answerCount > 0 ? "green" : "";
  }

  voteColor() {
    if (this.props.question.voteCount > 0) {
      return "green";
    } else if (this.props.question.voteCount < 0) {
      return "red";
    } else {
      return "";
    }
  }

  render() {
    const answerColor = this.answerColor();
    const voteColor = this.voteColor();
    return (
      <div className="item-counts">
        <ul className={`answer-count ${answerColor}`}>
          <li className="count">{this.props.question.answerCount}</li>
          <li className="word">Answers</li>
        </ul>
        <ul className={`vote-count ${voteColor}`}>
          <li className="count">{this.props.question.voteCount}</li>
          <li className="word">Votes</li>
        </ul>
      </div>
    );
  }
}

export default ItemCounts;
