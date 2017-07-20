import React from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import AuthFormContainer from './auth/auth_form_container';
import QuestionsIndexContainer from './questions/questions_index_container';

const App = () => (
  <div className="app">
    <header className="nav">
      <Link to="/" className="home-link">
        <h1>NodeItAll</h1>
      </Link>
      <NavBarContainer />
    </header>
    <section className="main">
      <Switch>
        <Route exact path="/" component={QuestionsIndexContainer} />
        <Route path="/login" component={AuthFormContainer} />
        <Route path="/signup" component={AuthFormContainer} />
      </Switch>
    </section>
  </div>
);

export default App;
