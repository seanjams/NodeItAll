import { connect } from 'react-redux';
import QuestionDetail from './question_detail';
import { requestSingleQuestion } from '../../actions/question_actions';

const mapStateToProps = ({questions}) => ({
  questions
});

const mapDispatchToProps = dispatch => ({
  requestSingleQuestion: id => dispatch(requestSingleQuestion(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDetail);
