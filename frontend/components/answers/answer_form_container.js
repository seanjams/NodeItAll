import { connect } from 'react-redux';
import { createAnswer } from '../../actions/answer_actions';
import AnswerForm from './answer_form';

const mapStateToProps = ({session, answers}) => ({
  currentUser: session.currentUser,
  errors: answers.errors
});

const mapDispatchToProps = dispatch => ({
  createAnswer: answer => dispatch(createAnswer(answer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerForm);
