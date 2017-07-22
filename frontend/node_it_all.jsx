import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// test imports
import {requestAllQuestions,
        requestSingleQuestion,
        deleteQuestion,
        createQuestion,
        updateQuestion } from './actions/question_actions';
import { login,
        signup,
        logout,
        clearSessionErrors } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser} };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, root);

  // These are actions for testing Ajax
  // window.store = store;
  // window.requestAllQuestions = requestAllQuestions;
  // window.requestSingleQuestion = requestSingleQuestion;
  // window.deleteQuestion = deleteQuestion;
  // window.createQuestion = createQuestion;
  // window.updateQuestion = updateQuestion;
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
  // window.clearSessionErrors = clearSessionErrors;
});
