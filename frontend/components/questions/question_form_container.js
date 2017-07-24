import { connect } from 'react-redux';
import { createQuestion,
        clearQuestionErrors } from '../../actions/question_actions';
import QuestionForm from './question_form';

const mapStateToProps = ({session, questions}) => ({
  currentUser: session.currentUser,
  errors: questions.errors
});

const mapDispatchToProps = dispatch => ({
  createQuestion: question => dispatch(createQuestion(question)),
  clearQuestionErrors: () => dispatch(clearQuestionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
