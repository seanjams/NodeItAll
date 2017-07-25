import merge from 'lodash/merge';
import { RECEIVE_VOTE } from '../actions/vote_actions';
import { RECEIVE_QUESTIONS,
        RECEIVE_QUESTION,
        REMOVE_QUESTION,
        QUESTION_ERROR,
        REMOVE_ERRORS } from '../actions/question_actions';

const questionReducer = (state = {errors: []}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch (action.type) {
  case RECEIVE_QUESTIONS:
    return merge({}, state, action.questions);
  case RECEIVE_QUESTION:
    return merge({}, state, {
      [action.question.id]: action.question
    });
  case REMOVE_QUESTION:
    delete nextState[action.question.id];
    return nextState;
  case QUESTION_ERROR:
    return merge({}, state, {errors: action.errors});
  case REMOVE_ERRORS:
    return Object.assign({}, state, {errors: []});
  case RECEIVE_VOTE:
    let increment = 0;
    const vote = action.vote;
    if (vote.itemType === "Question") {
      increment = vote.upvote ? 1: -1;
      nextState[vote.itemId].voteCount += increment;
    }
    return nextState;
  default:
    return state
  }
};

export default questionReducer;
