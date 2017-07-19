import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER,
        receiveCurrentUser } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  if (action.type === RECEIVE_CURRENT_USER) {
    return merge({}, state, {
      currentUser: action.currentUser
    });
  } else {
    return state;
  }
}

export default sessionReducer;
