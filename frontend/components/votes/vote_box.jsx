import React from 'react';

class VoteBox extends React.Component {

  constructor(props) {
    super(props);
    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(upvote) {
    this.props.clearVoteErrors();
    if (this.props.item.currentUserVote === 0) {
      this.props.createVote({
        item_id: this.props.item.id,
        item_type: this.props.itemType,
        upvote
      });
    } else {
      this.props.deleteVote(this.props.item.currentVoteId);
    }
  }

  render() {
    const { currentUserVote } = this.props.item;
    return (
      <div className="vote-box">
        <button onClick={() => this.handleVote(true)}
                disabled={this.props.item.currentUserVote === 1}>
          <i className="fa fa-chevron-up" aria-hidden="true"></i>
        </button>
        <p className="vote-count">{this.props.item.voteCount}</p>
        <button onClick={() => this.handleVote(false)}
                disabled={this.props.item.currentUserVote === -1}>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </button>
      </div>
    );
  }

}

export default VoteBox;
