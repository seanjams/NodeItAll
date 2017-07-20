import { connect } from 'react-redux';
import QuestionsIndex from './questions_index';
import { requestAllQuestions,
        requestSingleQuestion,
        createQuestion,
        updateQuestion,
        deleteQuestion } from '../../actions/question_actions';
import { selectAllQuestions } from '../../reducers/selectors';

const mapStateToProps = state => ({
  questions: selectAllQuestions(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllQuestions: () => dispatch(requestAllQuestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsIndex);
