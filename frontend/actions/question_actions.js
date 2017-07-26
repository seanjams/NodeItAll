import * as APIUtil from '../util/api_util';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const QUESTION_ERROR = "QUESTION_ERROR";
export const REMOVE_QUESTION_ERRORS = "REMOVE_QUESTION_ERRORS";

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

export const removeQuestion = question => ({
  type: REMOVE_QUESTION,
  question
});

export const receiveQuestionError = errors => ({
  type: QUESTION_ERROR,
  errors
});

export const clearQuestionErrors = () => ({
  type: REMOVE_QUESTION_ERRORS
});

export const requestAllQuestions = () => dispatch => (
  APIUtil.fetchAllQuestions()
  .then(questions => dispatch(receiveQuestions(questions)))
);

export const requestSingleQuestion = id => dispatch => (
  APIUtil.fetchSingleQuestion(id)
  .then(question => dispatch(receiveQuestion(question)))
);

export const createQuestion = question => dispatch => (
  APIUtil.createQuestion(question).then(
    question => dispatch(receiveQuestion(question)),
    err => dispatch(receiveQuestionError(err.responseJSON))
  )
);

export const updateQuestion = question => dispatch => (
  APIUtil.updateQuestion(question).then(
    question => dispatch(receiveQuestion(question)),
    err => dispatch(receiveQuestionError(err.responseJSON))
  )
);

export const deleteQuestion = id => dispatch => (
  APIUtil.deleteQuestion(id).then(
    question => dispatch(removeQuestion(question)),
    err => dispatch(receiveQuestionError(err.responseJSON))
  )
);
