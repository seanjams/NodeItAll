import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// test imports
import {requestAllQuestions,
        requestSingleQuestion,
        removeQuestion,
        createQuestion,
        updateQuestion } from './actions/question_actions';
import { login,
        signup,
        logout,
        clearErrors } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);

  window.store = store;
  window.requestAllQuestions = requestAllQuestions;
  window.requestSingleQuestion = requestSingleQuestion;
  window.removeQuestion = removeQuestion;
  window.createQuestion = createQuestion;
  window.updateQuestion = updateQuestion;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.clearErrors = clearErrors;
});
