import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AuthForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    window.props = this.props;
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
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  render() {
    const formType = this.props.formType === 'login' ? "Log In" : "Sign Up";
    return (
      <div className="auth-form-container">
        <h2>{formType} or {this.navLink()}</h2>
        <form className="auth-form" onSubmit={ this.handleSubmit }>
          <label className="auth-form-label">Username
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')} />
          </label>
          <label className="auth-form-label">Email
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')} />
          </label>
          <label className="auth-form-label">Password
            <input type="text"
              value={this.state.password}
              onChange={this.update('password')} />
          </label>
          <div className="login-button"><button>Submit</button></div>
        </form>
      </div>
    );
  }
}

export default withRouter(AuthForm);
