import { connect } from 'react-redux';
import { requestSingleQuestion } from '../../actions/question_actions';
import { requestAllAnswers } from '../../actions/answer_actions';
import { selectAnswers } from '../../reducers/selectors';
import QuestionDetail from './question_detail';

const mapStateToProps = (state) => ({
  answers: selectAnswers(state),
  questions: state.questions
});

const mapDispatchToProps = dispatch => ({
  requestSingleQuestion: id => dispatch(requestSingleQuestion(id)),
  requestAllAnswers: id => dispatch(requestAllAnswers(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDetail);
