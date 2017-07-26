import { connect } from 'react-redux';
import VoteBox from './vote_box';
import { requestSingleQuestion } from '../../actions/question_actions';
import { requestAllAnswers } from '../../actions/answer_actions';
import { createVote,
        deleteVote,
        clearVoteErrors } from '../../actions/vote_actions';

const mapStateToProps = ({session, votes}, own) => ({
  currentUser: session.currentUser,
  errors: votes.errors
});

const mapDispatchToProps = dispatch => ({
  createVote: vote => dispatch(createVote(vote)),
  deleteVote: vote => dispatch(deleteVote(vote)),
  clearVoteErrors: () => dispatch(clearVoteErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteBox);
