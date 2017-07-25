import { combineReducers } from 'redux';
import questionReducer from './question_reducer';
import sessionReducer from './session_reducer';
import answerReducer from './answer_reducer';
import voteReducer from './vote_reducer';

const rootReducer = combineReducers({
  questions: questionReducer,
  session: sessionReducer,
  answers: answerReducer,
  votes: voteReducer
})

export default rootReducer;
