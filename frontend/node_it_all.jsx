import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// test imports
import {requestAllQuestions, requestSingleQuestion, removeQuestion} from './actions/question_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.requestAllQuestions = requestAllQuestions;
  ReactDOM.render(<Root store={store} />, root);
});
