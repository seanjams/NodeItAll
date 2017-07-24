import React from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import AuthFormContainer from './auth/auth_form_container';
import SubheaderContainer from './subheader/subheader_container';
import QuestionFormContainer from './questions/question_form_container';
import QuestionsIndexContainer from './questions/questions_index_container';
import QuestionDetailContainer from './questions/question_detail_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="app">
    <header>
      <NavBarContainer />
      <SubheaderContainer />
    </header>
    <section className="main">
      <div className="index">
      <Switch>
        <Route path="/questions/:questionId" component={QuestionDetailContainer} />
        <Route path="/" component={QuestionsIndexContainer} />
      </Switch>
      </div>
      <div className="form">
        <Switch>
          <AuthRoute path="/signup" component={AuthFormContainer} />
          <AuthRoute path="/login" component={AuthFormContainer} />
          <ProtectedRoute path="/" component={QuestionFormContainer} />
        </Switch>
      </div>
    </section>
  </div>
);

export default App;
