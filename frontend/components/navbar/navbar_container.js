import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { signup, login, logout, clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
