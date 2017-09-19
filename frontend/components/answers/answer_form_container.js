import { connect } from 'react-redux';
import { createAnswer,
        clearAnswerErrors } from '../../actions/answer_actions';
import AnswerForm from './answer_form';

const mapStateToProps = ({session, questions, answers}) => ({
  currentUser: session.currentUser,
  currentQuestion: questions.currentQuestion,
  errors: answers.errors
});

const mapDispatchToProps = dispatch => ({
  createAnswer: answer => dispatch(createAnswer(answer)),
  clearAnswerErrors: () => dispatch(clearAnswerErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerForm);
