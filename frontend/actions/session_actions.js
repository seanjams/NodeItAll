import * as APIUtil from '../util/api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SESSION_ERROR = "SESSION_ERROR";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionError = errors => ({
  type: SESSION_ERROR,
  errors
});

export const clearSessionErrors = () => ({
  type: REMOVE_SESSION_ERRORS
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveSessionError(err.responseJSON))
  )
);

export const login = user => dispatch => (
  APIUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveSessionError(err.responseJSON))
  )
);

export const logout = () => dispatch => (
  APIUtil.logout().then(
    () => dispatch(receiveCurrentUser(null)),
    err => dispatch(receiveSessionError(err.responseJSON))
  )
);
