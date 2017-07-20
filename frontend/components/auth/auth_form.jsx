import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SubheaderContainer from '../subheader/subheader_container';

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
      <div className="auth-form">
        <input type="text"
          value={this.state.username}
          onChange={this.update('username')}
          placeholder="Username or Email" />
        <input type="password"
          value={this.state.password}
          onChange={this.update('password')}
          placeholder="Password"/>
        <div className="session-button-container">
          <button className="session-button">Log In</button>
        </div>
      </div>
    )
  }

  renderSignup() {
    return (
      <div className="auth-form">
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
        <div className="session-button-container">
          <button className="session-button">Sign Up</button>
        </div>
      </div>
    )
  }

  render() {
    const { formType } = this.props;
    return (
      <div className="auth-page">
        <SubheaderContainer formType={this.props.formType} />
        <form className="auth-form-container" onSubmit={ this.handleSubmit }>
          { formType === "login" ? this.renderLogin(): this.renderSignup() }
        </form>
      </div>
    );
  }
}

export default withRouter(AuthForm);
