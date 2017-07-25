import React from 'react';

class VoteBox extends React.Component {

  constructor(props) {
    super(props);
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.setState({
        user_id: this.props.currentUser.id
      });
    }
  }

  handleVote(upvote) {
    const { currentUserVote } = this.props;
    // if (currentUserVote === 0) {
      this.props.createVote({
        item_id: this.props.itemId,
        item_type: this.props.itemType,
        upvote
      });
    // } else {
      // this.props.changeVote({
      //   item_id: this.props.itemId,
      //   item_type: this.props.itemType
      // });
    // }
  }

  isDisabled(vote_type) {
    const { currentUserVote } = this.props;
    return (((vote_type === 'upvote') && (currentUserVote === 1)) ||
           ((vote_type === 'downvote') && (currentUserVote === -1)));
  }

  render() {
    return (
      <div className="vote-box">
        <button onClick={() => this.handleVote(true)}
                disabled={this.isDisabled('upvote')}>
          <i className="fa fa-chevron-up" aria-hidden="true"></i>
        </button>
        <p className="vote-count">{this.props.voteCount}</p>
        <button onClick={() => this.handleVote(false)}
                disabled={this.isDisabled('downvote')}>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </button>
      </div>
    );
  }

}

export default VoteBox;
