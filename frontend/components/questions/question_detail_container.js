import { connect } from 'react-redux';
import { requestSingleQuestion } from '../../actions/question_actions';
import { requestAllAnswers } from '../../actions/answer_actions';
import { requestAllVotes } from '../../actions/vote_actions';
import { selectAnswers, selectVotes } from '../../reducers/selectors';
import QuestionDetail from './question_detail';

const mapStateToProps = (state) => ({
  answers: selectAnswers(state),
  votes: selectVotes(state),
  questions: state.questions
});

const mapDispatchToProps = dispatch => ({
  requestSingleQuestion: id => dispatch(requestSingleQuestion(id)),
  requestAllAnswers: id => dispatch(requestAllAnswers(id)),
  requestAllVotes: (id, type) => dispatch(requestAllVotes(id, type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDetail);
