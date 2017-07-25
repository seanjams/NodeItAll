import merge from 'lodash/merge';
import { RECEIVE_VOTES,
        RECEIVE_VOTE,
        VOTE_ERROR,
        REMOVE_ERRORS } from '../actions/vote_actions';

const voteReducer = (state = {errors: []}, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_VOTES:
    return merge({}, state, action.votes);
  case RECEIVE_VOTE:
    return merge({}, state, {
      [action.vote.id]: action.vote
    });
  case VOTE_ERROR:
    return merge({}, state, {errors: action.errors});
  case REMOVE_ERRORS:
    return Object.assign({}, state, {errors: []});
  default:
    return state
  }
};

export default voteReducer;
