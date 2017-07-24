import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Subheader from './subheader';
import { clearSessionErrors } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  return {
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    formType
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Subheader));
