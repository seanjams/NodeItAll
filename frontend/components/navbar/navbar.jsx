import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  loginLinks(currentUser, signup, login, logout) {
    const sampleUser = {username: "Sample", email: "Sample", password: "12345678"}
    if (currentUser) {
      return (
        <button className="session-button" onClick={logout}>Log Out</button>
      );
    } else {
      return (
        <div className="session-links">
          <Link to="/signup" className="session-button">Sign Up</Link>
          <Link to="/login" className="session-button">Log In</Link>
          <button onClick={() => this.props.login(sampleUser)}
            className="session-button">
              Guest Log In
          </button>
        </div>
      );
    }
  }

  render() {
    const { currentUser, signup, login, logout } = this.props;
    return (
      <div className="greeting">
        <p>
          { currentUser ? `Hi ${currentUser.username}!` : null }
        </p>
        { this.loginLinks(currentUser, signup, login, logout) }
      </div>
    )
  }
}

export default NavBar;
