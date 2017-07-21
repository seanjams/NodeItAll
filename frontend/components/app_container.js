import { connect } from 'react-redux';
import App from './app';
import { requestAllQuestions } from '../actions/question_actions';

const mapDispatchToProps = dispatch => ({
  requestAllQuestions: () => dispatch(requestAllQuestions())
})

export default connect(
  null, mapDispatchToProps
)(App);
