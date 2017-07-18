import merge from 'lodash/merge';
import { RECEIVE_QUESTIONS,
        RECEIVE_QUESTION,
        REMOVE_QUESTION,
        receiveQuestions,
        receiveQuestion,
        removeQuestion } from '../actions/question_actions';

const questionReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
  case RECEIVE_QUESTIONS:
    nextState = merge({}, state, action.questions);
    return nextState;
  case RECEIVE_QUESTION:
    nextState = merge({}, state, {
      [action.question.id]: action.question
    });
    return nextState;
  case REMOVE_QUESTION:
    nextState = merge({}, state);
    delete nextState[action.question.id];
    return nextState;
  default:
    return state
  }
};

export default questionReducer;
