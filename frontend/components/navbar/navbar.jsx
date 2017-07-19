import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {


  greeting() {
    const { currentUser, signup, login, logout } = this.props;
    return (
      <div className="login-links">
        <h3>
          {currentUser ? currentUser.username : "Welcome! Please log in"}
        </h3>
        { this.loginLinks(currentUser, signup, login, logout) }
      </div>
    )
  }

  loginLinks(currentUser, signup, login, logout) {
    // const currentUser = this.props.currentUser;
    if (currentUser) {
      return (
        <button className="header-button" onClick={logout}>Log Out</button>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      );
    }
  }



  render() {
    const currentUser = this.props.currentUser
    return (
      <div>
        { this.greeting() }
      </div>
    );
  }
}

export default NavBar;
