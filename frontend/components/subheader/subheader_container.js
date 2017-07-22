import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Subheader from './subheader';
import { clearSessionErrors } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => {
  return {
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(null, mapDispatchToProps)(Subheader);
