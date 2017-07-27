import * as APIUtil from '../util/api_util';

export const RECEIVE_VOTES = "RECEIVE_VOTES";
export const RECEIVE_VOTE = "RECEIVE_VOTE";
export const REMOVE_VOTE = "REMOVE_VOTE";
export const VOTE_ERROR = "VOTE_ERROR";
export const REMOVE_VOTE_ERRORS = "REMOVE_VOTE_ERRORS";

export const receiveVote = vote => ({
  type: RECEIVE_VOTE,
  vote
});

export const removeVote = vote => ({
  type: REMOVE_VOTE,
  vote
});


export const receiveVoteError = errors => ({
  type: VOTE_ERROR,
  errors
});

export const clearVoteErrors = () => ({
  type: REMOVE_VOTE_ERRORS
});

export const createVote = vote => dispatch => (
  APIUtil.createVote(vote).then(
    vote => dispatch(receiveVote(vote)),
    err => dispatch(receiveVoteError(err.responseJSON))
  )
);

export const deleteVote = vote => dispatch => (
  APIUtil.deleteVote(vote).then(
    vote => dispatch(removeVote(vote)),
    err => dispatch(receiveVoteError(err.responseJSON))
  )
);
