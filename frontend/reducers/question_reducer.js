import merge from 'lodash/merge';
import { RECEIVE_QUESTIONS,
        RECEIVE_QUESTION,
        REMOVE_QUESTION,
        QUESTION_ERROR } from '../actions/question_actions';




const questionReducer = (state = {errors: []}, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_QUESTIONS:
    return merge({}, state, action.questions);
  case RECEIVE_QUESTION:
    return merge({}, state, {
      [action.question.id]: action.question
    });
  case REMOVE_QUESTION:
    const nextState = merge({}, state);
    delete nextState[action.question.id];
    return nextState;
  case QUESTION_ERROR:
    return merge({}, state, {errors: action.errors})
  default:
    return state
  }
};

export default questionReducer;
