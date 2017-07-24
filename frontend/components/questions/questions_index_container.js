import { connect } from 'react-redux';
import { requestAllQuestions } from '../../actions/question_actions';
import { selectQuestions } from '../../reducers/selectors';
import QuestionsIndex from './questions_index';

const mapStateToProps = state => ({
  questions: selectQuestions(state)
});

const mapDispatchToProps = (dispatch, {location}) => ({
  requestAllQuestions: () => dispatch(requestAllQuestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsIndex);
