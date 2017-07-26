import { connect } from 'react-redux';
import { selectQuestions } from '../../reducers/selectors';
import { requestAllQuestions } from '../../actions/question_actions';
import SearchBar from './search_bar';


const mapStateToProps = state => ({
  questions: selectQuestions(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllQuestions: () => dispatch(requestAllQuestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
