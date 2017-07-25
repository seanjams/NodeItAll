import merge from 'lodash/merge';
import { RECEIVE_VOTE } from '../actions/vote_actions';
import { RECEIVE_ANSWERS,
        RECEIVE_ANSWER,
        ANSWER_ERROR,
        REMOVE_ERRORS } from '../actions/answer_actions';

const answerReducer = (state = {errors: []}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch (action.type) {
  case RECEIVE_ANSWERS:
    return merge({}, action.answers, {errors: []});
  case RECEIVE_ANSWER:
    return merge({}, state, {
      [action.answer.id]: action.answer
    });
  case ANSWER_ERROR:
    return merge({}, state, {errors: action.errors});
  case REMOVE_ERRORS:
    return Object.assign({}, state, {errors: []});
  case RECEIVE_VOTE:
    let increment = 0;
    const vote = action.vote;
    if (vote.itemType === "Answer") {
      increment = vote.upvote ? 1: -1;
      nextState[vote.itemId].voteCount += increment;
    }
    return nextState;
  default:
    return state
  }
};

export default answerReducer;
