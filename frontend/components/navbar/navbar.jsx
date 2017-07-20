import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  loginLinks() {
    const { currentUser, login, logout, clearErrors } = this.props;
    const sampleUser = {
      username: "Sample",
      email: "Sample",
      password: "12345678"
    };
    if (currentUser) {
      return (
        <button className="session-button" onClick={logout}>Log Out</button>
      );
    } else {
      return (
        <div className="session-links">
          <Link to="/signup"
            className="session-button"
            onClick={clearErrors}>Sign Up</Link>
          <Link to="/login"
            className="session-button"
            onClick={clearErrors}>Log In</Link>
          <button onClick={() => login(sampleUser)}
            className="session-button">
              Guest Log In
          </button>
        </div>
      );
    }
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="greeting">
        <p>
          { currentUser ? `Hi ${currentUser.username}!` : null }
        </p>
        { this.loginLinks() }
      </div>
    )
  }
}

export default NavBar;
