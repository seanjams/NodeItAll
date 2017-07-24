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

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
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
    const processSession = formType === "login" ? login : signup;
    processSession(this.state);
    this.setState({
      username: "",
      email: "",
      password: ""
    });
  }

  renderErrors() {
    return this.props.errors.map((err, i) => (
      <li key={`err-${i}`}>{err}</li>
    ));
  }

  renderLogin() {
    return (
      <form className="auth-form" onSubmit={ this.handleSubmit }>
        <ul className="error-list">{ this.renderErrors() }</ul>
        <input type="text"
          value={this.state.username}
          onChange={this.update('username')}
          placeholder="Username or Email" />
        <input type="password"
          value={this.state.password}
          onChange={this.update('password')}
          placeholder="Password"/>
        <div className="button-container">
          <button className="button">Log In</button>
        </div>
      </form>
    )
  }

  renderSignup() {
    return (
      <form className="auth-form" onSubmit={ this.handleSubmit }>
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
        <div className="button-container">
          <button className="button">Sign Up</button>
        </div>
      </form>
    )
  }

  render() {
    const { formType } = this.props;
    return (
      <div className="form">
        { formType === "login" ? this.renderLogin(): this.renderSignup() }
      </div>
    );
  }
}

export default AuthForm;
