import * as APIUtil from '../util/api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERROR = "RECEIVE_ERROR";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveError = errors => ({
  type: RECEIVE_ERROR,
  errors
});

export const clearErrors = () => ({
  type: REMOVE_ERRORS,
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveError(err.responseJSON))
  )
);

export const login = user => dispatch => (
  APIUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveError(err.responseJSON))
  )
);

export const logout = () => dispatch => (
  APIUtil.logout().then(
    () => dispatch(receiveCurrentUser(null)),
    err => dispatch(receiveError(err.responseJSON))
  )
);
