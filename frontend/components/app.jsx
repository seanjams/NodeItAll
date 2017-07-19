import React from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import AuthFormContainer from './auth/auth_form_container';

const App = () => (
  <div className="app">
    <header>
      <Link to="/" className="home-link">
        <h1>NodeItAll</h1>
      </Link>
      <NavBarContainer />
    </header>
    <section>
      <Switch>
        <Route exact path="/" render={() => <h1>Hi! Home Route Here</h1>} />
        <Route path="/login" component={AuthFormContainer} />
        <Route path="/signup" component={AuthFormContainer} />
      </Switch>
    </section>
  </div>
);

export default App;
