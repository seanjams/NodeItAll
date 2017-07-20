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
    const process = formType === "login" ? login : signup;
    process(this.state);
    this.setState({
      username: "",
      email: "",
      password: ""
    });
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup" onClick={this.props.clearErrors}>Sign Up</Link>;
    } else {
      return <Link to="/login" onClick={this.props.clearErrors}>Log In</Link>;
    }
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
          placeholder="Username" />
        <input type="password"
          value={this.state.password}
          onChange={this.update('password')}
          placeholder="Password"/>
        <div className="session-button-container">
          <button className="session-button">Log In</button>
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
        <div className="session-button-container">
          <button className="session-button">Sign Up</button>
        </div>
      </form>
    )
  }

  render() {
    const formType = this.props.formType === 'login' ? "Log In" : "Sign Up";
    return (
      <div className="auth-page">
        <SubheaderContainer
          formType={this.props.formType} />
        <div className="auth-form-container">
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
            <div className="session-button-container">
              <button className="session-button">{ formType }</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(AuthForm);
