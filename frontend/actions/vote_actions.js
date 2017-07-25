import * as APIUtil from '../util/api_util';

export const RECEIVE_VOTES = "RECEIVE_VOTES";
export const RECEIVE_VOTE = "RECEIVE_VOTE";
export const VOTE_ERROR = "VOTE_ERROR";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const receiveVotes = votes => ({
  type: RECEIVE_VOTES,
  votes
});

export const receiveVote = vote => ({
  type: RECEIVE_VOTE,
  vote
});

export const receiveVoteError = errors => ({
  type: VOTE_ERROR,
  errors
});

export const clearVoteErrors = () => ({
  type: REMOVE_ERRORS
});

export const requestAllVotes = (itemId, itemType) => dispatch => (
  APIUtil.fetchAllVotes(itemId, itemType)
    .then(votes => dispatch(receiveVotes(votes)))
);

// might be useless
export const requestSingleVote = (id) => dispatch => (
  APIUtil.fetchSingleVote(id)
    .then(vote => dispatch(receiveVote(vote)))
);

export const createVote = vote => dispatch => (
  APIUtil.createVote(vote).then(
    vote => dispatch(receiveVote(vote)),
    err => dispatch(receiveVoteError(err.responseJSON))
  )
);
