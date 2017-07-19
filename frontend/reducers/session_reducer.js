import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER,
        receiveCurrentUser } from '../actions/session_actions';

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
  default:
    return state;
  }
}

export default sessionReducer;
