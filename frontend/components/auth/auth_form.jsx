import React from 'react';
import { withRouter } from 'react-router-dom';

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

  render() {
    // if (loggedIn) {
    //   return (
    //     <Route path="/" />
    //   );
    // } else {
        return (
          <form onSubmit={ this.handleSubmit }>
            <label>Username
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')} />
            </label>
            <label>Email
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')} />
            </label>
            <label>Password
              <input type="text"
                value={this.state.password}
                onChange={this.update('password')} />
            </label>
            <button>Submit</button>
          </form>
        );
      // }
  }
}

export default withRouter(AuthForm);
