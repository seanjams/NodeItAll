import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SubheaderContainer from '../subheader/subheader_container';
import QuestionsIndexContainer from '../questions/questions_index_container';

class AuthForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  componentWillReceiveProps(nextProps) {
    const flag = nextProps.formType === 'login' || nextProps.formType === 'signup';
    if (nextProps.loggedIn && flag) {
      this.props.history.push('/');
    }
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { formType, login, signup } = this.props;
    const processSession = formType === "signup" ? signup : login;
    processSession(this.state);
    this.setState({
      username: "",
      email: "",
      password: ""
    });
    if (this.props.match.params && this.props.match.params.questionId) {
      this.props.requestSingleQuestion(this.props.match.params.questionId);
    }
  }

  renderErrors() {
    if (this.props.errors) {
      return this.props.errors.map((err, i) => (
        <li key={`err-${i}`}>{err}</li>
      ));
    }
  }

  renderLogin() {
    return (
      <form className="auth-form" onSubmit={ this.handleSubmit }>
        <h1>Welcome to NodeItAll</h1>
        <ul className="error-list">{ this.renderErrors() }</ul>
        <input type="text"
          value={this.state.username}
          onChange={this.update('username')}
          placeholder="Username or Email" />
        <input type="password"
          value={this.state.password}
          onChange={this.update('password')}
          placeholder="Password"/>
        <div className="submit-button-container">
          <button className="button">Log In</button>
        </div>
      </form>
    );
  }

  renderSignup() {
    return (
      <form className="auth-form" onSubmit={ this.handleSubmit }>
        <h1>Welcome to NodeItAll</h1>
        <ul className="error-list">{ this.renderErrors() }</ul>
        <input type="text"
          value={this.state.username}
          onChange={this.update('username')}
          placeholder="Username" />
        <input type="text"
          value={this.state.email}
          onChange={this.update('email')}
          placeholder="Email" />
        <input type="password"
          value={this.state.password}
          onChange={this.update('password')}
          placeholder="Password"/>
        <div className="submit-button-container">
          <button className="button">Sign Up</button>
        </div>
      </form>
    );
  }

  render() {
    const { formType } = this.props;
    return (
      <div className="form">
        { formType === "signup" ? this.renderSignup(): this.renderLogin() }
      </div>
    );
  }
}

export default AuthForm;
