import merge from 'lodash/merge';
import { RECEIVE_VOTE, REMOVE_VOTE } from '../actions/vote_actions';
import { RECEIVE_QUESTIONS,
        RECEIVE_QUESTION,
        REMOVE_QUESTION,
        QUESTION_ERROR,
        REMOVE_QUESTION_ERRORS } from '../actions/question_actions';

const nullState = () => Object.freeze({
  currentQuestion: null,
  errors: []
});

const questionReducer = (state = nullState(), action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  let increment = 0;
  let vote;

  switch (action.type) {
  case RECEIVE_QUESTIONS:
    return Object.assign({}, action.questions, {
      currentQuestion: null,
      errors: []
    });
  case RECEIVE_QUESTION:
    const { question } = action;
    return merge(nextState, {
      [question.id]: question,
      currentQuestion: question
    });
  case REMOVE_QUESTION:
    delete nextState[action.question.id];
    return merge(nextState, {currentQuestion: null});
  case QUESTION_ERROR:
    return merge(nextState, {errors: action.errors});
  case REMOVE_QUESTION_ERRORS:
    return Object.assign(nextState, {errors: []});
  case RECEIVE_VOTE:
    vote = action.vote;
    if (vote.itemType === "Question") {
      increment = vote.upvote ? 1: -1;
      nextState[vote.itemId].voteCount += increment;
      nextState[vote.itemId].currentUserVote += increment;
      nextState[vote.itemId].currentVoteId = vote.id;
    }
    return nextState;
  case REMOVE_VOTE:
    vote = action.vote;
    if (vote.itemType === "Question") {
      increment = vote.upvote ? 1: -1;
      nextState[vote.itemId].voteCount -= increment;
      nextState[vote.itemId].currentUserVote -= increment;
      nextState[vote.itemId].currentVoteId = null;
    }
    return nextState;
  default:
    return state
  }
};

export default questionReducer;
