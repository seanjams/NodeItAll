import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { receiveQuestions, requestAllQuestions } from '../../actions/question_actions';
import { selectRecentQuestions, selectTrendingQuestions } from '../../reducers/selectors';
import QuestionsIndex from './questions_index';

const mapStateToProps = state => ({
  questions: selectRecentQuestions(state),
  trendingQuestions: selectTrendingQuestions(state)
});

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  return {
  requestAllQuestions: () => dispatch(requestAllQuestions()),
  receiveQuestions: (questions) => dispatch(receiveQuestions(questions)),
  formType
}};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsIndex));
