import merge from 'lodash/merge';
import { RECEIVE_VOTES,
        RECEIVE_VOTE,
        REMOVE_VOTE,
        VOTE_ERROR,
        REMOVE_VOTE_ERRORS } from '../actions/vote_actions';

const voteReducer = (state = {errors: []}, action) => {
  Object.freeze(state);
  const nextState = merge({}, state);

  switch (action.type) {
  case RECEIVE_VOTE:
    return merge({}, state, {
      [action.vote.id]: action.vote
    });
  case REMOVE_VOTE:
    delete nextState[action.vote.id];
    return nextState;
  case VOTE_ERROR:
    return merge({}, state, {errors: action.errors});
  case REMOVE_VOTE_ERRORS:
    return Object.assign({}, state, {errors: []});
  default:
    return state
  }
};

export default voteReducer;
