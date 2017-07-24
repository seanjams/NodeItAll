import * as APIUtil from '../util/api_util';

export const RECEIVE_ANSWERS = "RECEIVE_ANSWERS";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const ANSWER_ERROR = "ANSWER_ERROR";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const receiveAnswers = answers => ({
  type: RECEIVE_ANSWERS,
  answers
});

export const receiveAnswer = answer => ({
  type: RECEIVE_ANSWER,
  answer
});

export const receiveAnswerError = errors => ({
  type: ANSWER_ERROR,
  errors
});

export const clearAnswerErrors = () => ({
  type: REMOVE_ERRORS
});

export const requestAllAnswers = questionId => dispatch => (
  APIUtil.fetchAllAnswers(questionId)
  .then(answers => dispatch(receiveAnswers(answers)))
);

export const requestSingleAnswer = answerId => dispatch => (
  APIUtil.fetchSingleAnswer(answerId)
  .then(answer => dispatch(receiveAnswer(answer)))
);

export const createAnswer = answer => dispatch => (
  APIUtil.createAnswer(answer).then(
    answer => dispatch(receiveAnswer(answer)),
    err => dispatch(receiveAnswerError(err.responseJSON))
  )
);
