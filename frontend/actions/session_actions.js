import * as APIUtil from '../util/api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(curruser => dispatch(receiveCurrentUser(curruser)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)))
);
