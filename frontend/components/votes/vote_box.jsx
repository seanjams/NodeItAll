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

  // voteCount() {
  //
  // }

  handleVote(upvote) {
    this.props.createVote({
      item_id: this.props.itemId,
      item_type: "Question",
      upvote
    });
  }

  render() {
    return (
      <div className="vote-box">
        <button onClick={() => this.handleVote(true)}>Upvote</button>
        <p>{this.props.voteCount}</p>
        <button onClick={() => this.handleVote(false)}>Downvote</button>
      </div>
    );
  }

}

export default VoteBox;
