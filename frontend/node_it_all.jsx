import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// test imports
import { receiveQuestions,
        requestAllQuestions,
        requestSingleQuestion,
        deleteQuestion,
        createQuestion,
        updateQuestion } from './actions/question_actions';
import { deleteAnswer } from './actions/answer_actions';
import { login,
        signup,
        logout,
        clearSessionErrors } from './actions/session_actions';
import { requestAllAnswers } from './actions/answer_actions';
import { createVote } from './actions/vote_actions';

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
});
