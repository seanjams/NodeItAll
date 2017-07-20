import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  loggedIn: !!session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
