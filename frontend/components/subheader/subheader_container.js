import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Subheader from './subheader';
import { clearErrors } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(null, mapDispatchToProps)(Subheader);
