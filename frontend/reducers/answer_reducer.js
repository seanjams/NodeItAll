import merge from 'lodash/merge';
import { RECEIVE_VOTE, REMOVE_VOTE } from '../actions/vote_actions';
import { RECEIVE_ANSWERS,
        RECEIVE_ANSWER,
        ANSWER_ERROR,
        REMOVE_ANSWER_ERRORS } from '../actions/answer_actions';

const answerReducer = (state = {errors: []}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  let increment = 0;
  let vote;

  switch (action.type) {
  case RECEIVE_ANSWERS:
    return merge({}, action.answers, {errors: []});
  case RECEIVE_ANSWER:
    return merge({}, state, {
      [action.answer.id]: action.answer
    });
  case ANSWER_ERROR:
    return merge({}, state, {errors: action.errors});
  case REMOVE_ANSWER_ERRORS:
    return Object.assign({}, state, {errors: []});
  case RECEIVE_VOTE:
    vote = action.vote;
    if (vote.itemType === "Answer") {
      increment = vote.upvote ? 1: -1;
      nextState[vote.itemId].voteCount += increment;
      nextState[vote.itemId].currentUserVote += increment;
      nextState[vote.itemId].currentVoteId = vote.id;
    }
    return nextState;
  case REMOVE_VOTE:
    vote = action.vote;
    if (vote.itemType === "Answer") {
      increment = vote.upvote ? 1: -1;
      nextState[vote.itemId].voteCount -= increment;
      nextState[vote.itemId].currentUserVote -= increment;
      nextState[vote.itemId].currentVoteId = null;
    }
    return nextState;
  default:
    return state
  }
};

export default answerReducer;
