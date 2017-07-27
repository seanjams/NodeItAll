import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';
import { signup, login, logout, clearSessionErrors } from '../../actions/session_actions';
import { requestAllQuestions, requestSingleQuestion } from '../../actions/question_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, {location}) => {
  let questionId = -1;
  if (location.pathname.startsWith("/questions/")) {
    questionId = location.pathname.slice(11);
  }
  return {
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  requestAllQuestions: () => dispatch(requestAllQuestions()),
  requestSingleQuestion: id => dispatch(requestSingleQuestion(id)),
  questionId
}};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));
