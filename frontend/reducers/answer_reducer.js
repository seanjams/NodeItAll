import merge from 'lodash/merge';
import { RECEIVE_ANSWERS,
        RECEIVE_ANSWER,
        ANSWER_ERROR,
        REMOVE_ERRORS } from '../actions/answer_actions';

const answerReducer = (state = {errors: []}, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_ANSWERS:
    return merge({}, state, action.answers);
  case RECEIVE_ANSWER:
    return merge({}, state, {
      [action.answer.id]: action.answer
    });
  case ANSWER_ERROR:
    return merge({}, state, {errors: action.errors});
  case REMOVE_ERRORS:
    return Object.assign({}, state, {errors: []});
  default:
    return state
  }
};

export default answerReducer;
