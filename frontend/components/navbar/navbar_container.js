import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';
import { signup, login, logout, clearSessionErrors } from '../../actions/session_actions';


const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, {location}) => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));
