import { connect } from 'react-redux';
import { selectRecentQuestions } from '../../reducers/selectors';
import { receiveQuestions,
        requestAllQuestions } from '../../actions/question_actions';
import SearchBar from './search_bar';


const mapStateToProps = state => ({
  questions: selectRecentQuestions(state)
});

const mapDispatchToProps = dispatch => ({
  receiveQuestions: questions => dispatch(receiveQuestions(questions)),
  requestAllQuestions: () => dispatch(requestAllQuestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
