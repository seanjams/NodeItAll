import React from 'react';

class ItemCounts extends React.Component {
  render() {
    return (
      <div className="item-counts">
        <ul>
          <p>Answers: {this.props.answerCount}</p>
          <p>Votes: 0</p>
        </ul>
      </div>
    );
  }
}

export default ItemCounts;
