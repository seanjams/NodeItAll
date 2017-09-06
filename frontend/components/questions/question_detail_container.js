import { connect } from 'react-redux';
import { requestSingleQuestion,
        deleteQuestion } from '../../actions/question_actions';
import { requestAllAnswers,
        removeAnswers,
        deleteAnswer } from '../../actions/answer_actions';
import { selectAnswers, selectRecentQuestions } from '../../reducers/selectors';
import QuestionDetail from './question_detail';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  answers: selectAnswers(state),
  currentQuestion: state.questions.currentQuestion
});

const mapDispatchToProps = dispatch => ({
  requestSingleQuestion: id => dispatch(requestSingleQuestion(id)),
  deleteQuestion: id => dispatch(deleteQuestion(id)),
  requestAllAnswers: id => dispatch(requestAllAnswers(id)),
  deleteAnswer: id => dispatch(deleteAnswer(id)),
  removeAnswers: () => dispatch(removeAnswers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDetail);
