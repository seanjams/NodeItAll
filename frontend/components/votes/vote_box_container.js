import { connect } from 'react-redux';
import VoteBox from './vote_box';
import { createVote,
        updateVote,
        clearVoteErrors } from '../../actions/vote_actions';

const mapStateToProps = ({session, votes}, own) => ({
  currentUser: session.currentUser,
  errors: votes.errors
});

const mapDispatchToProps = dispatch => ({
  createVote: vote => dispatch(createVote(vote)),
  updateVote: vote => dispatch(updateVote(vote)),
  clearVoteErrors: () => dispatch(clearVoteErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteBox);
