import React from 'react';

class ItemCounts extends React.Component {

  // voteCount() {
  //   const { upvotes } = this.props.question;
  //   let count = 0;
  //   upvotes.forEach((upvote) => (
  //     upvote ? count += 1 : count -= 1
  //   ));
  //   return count;
  // }

  render() {
    return (
      <div className="item-counts">
        <ul>
          <p>Answers: {this.props.question.answerCount}</p>
          <p>Votes: {this.props.question.voteCount}</p>
        </ul>
      </div>
    );
  }
}

export default ItemCounts;
