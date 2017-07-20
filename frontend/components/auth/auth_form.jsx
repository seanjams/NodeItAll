import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Subheader from '../subheader/subheader';

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
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  renderErrors() {
    return this.props.errors.map((err, i) => (
      <li key={`err-${i}`}>{err}</li>
    ));
  }

  render() {
    const formType = this.props.formType === 'login' ? "Log In" : "Sign Up";
    return (
      <div className="auth-page">
        <Subheader formType={this.props.formType} />
        <div className="auth-form-container">
          <form className="auth-form" onSubmit={ this.handleSubmit }>
            <ul className="error-list">{ this.renderErrors() }</ul>
            <label className="auth-form-label">
              <p>Username</p>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')} />
            </label>
            <label className="auth-form-label">
              <p>Email</p>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')} />
            </label>
            <label className="auth-form-label">
              <p>Password</p>
              <input type="text"
                value={this.state.password}
                onChange={this.update('password')} />
            </label>
            <div className="login-button-container">
              <button className="login-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(AuthForm);
