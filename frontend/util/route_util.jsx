import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import AuthFormContainer from '../components/auth/auth_form_container';

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
  )} />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
      loggedIn ? <Component {...props} /> : <AuthFormContainer />
  )} />
);

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser
});

export const AuthRoute = withRouter(
  connect(mapStateToProps, null)(Auth)
);

export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected)
);
