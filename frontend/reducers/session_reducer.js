import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER,
        RECEIVE_ERROR } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    return merge({}, state, {
      currentUser: action.currentUser
    });
  case RECEIVE_ERROR:
    return merge({}, state, {
      errors: action.err
    });
  default:
    return state;
  }
}

export default sessionReducer;
