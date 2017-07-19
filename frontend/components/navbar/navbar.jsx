import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  loginLinks(currentUser, signup, login, logout) {
    if (currentUser) {
      return (
        <button className="header-button" onClick={logout}>Log Out</button>
      );
    } else {
      return (
        <div className="login-links">
          <Link to="/signup" className="signup">Sign Up</Link>
          <Link to="/login" className="login">Log In</Link>
        </div>
      );
    }
  }

  render() {
    const { currentUser, signup, login, logout } = this.props;
    return (
      <div className="greeting">
        <h3>
          { currentUser ? currentUser.username : "Welcome! Please log in" }
        </h3>
        { this.loginLinks(currentUser, signup, login, logout) }
      </div>
    )
  }
}

export default NavBar;
