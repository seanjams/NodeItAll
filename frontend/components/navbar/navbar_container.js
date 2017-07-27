import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { signup, login, logout, clearSessionErrors } from '../../actions/session_actions';
import { requestAllQuestions } from '../../actions/question_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  requestAllQuestions: () => dispatch(requestAllQuestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
