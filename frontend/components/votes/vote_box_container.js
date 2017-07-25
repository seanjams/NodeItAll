import { connect } from 'react-redux';
import { createVote, clearVoteErrors } from '../../actions/vote_actions';
import VoteBox from './vote_box';

const mapStateToProps = ({session, votes}) => ({
  currentUser: session.currentUser,
  errors: votes.errors
});

const mapDispatchToProps = dispatch => ({
  createVote: vote => dispatch(createVote(vote)),
  clearVoteErrors: () => dispatch(clearVoteErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteBox);
