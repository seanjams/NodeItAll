import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Subheader from './subheader';
import { requestAllQuestions } from '../../actions/question_actions';

const mapStateToProps = ({questions}) => ({
  currentQuestion: questions.currentQuestion
});

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  return {
    requestAllQuestions: () => dispatch(requestAllQuestions()),
    formType
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Subheader));
