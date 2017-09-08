import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchBarContainer from '../search/search_bar_container';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.navHome = this.navHome.bind(this);
  }

  loginLinks() {
    const { currentUser, login, logout, clearSessionErrors } = this.props;
    const sampleUser = {
      username: "Sample",
      email: "Sample",
      password: "password"
    };
    if (currentUser) {
      return (
        <button className="button session-link" onClick={logout}>
          Log Out
        </button>
      );
    } else {
      return (
        <div className="session-links login">
          <Link to="/signup"
            className="button session-link login"
            onClick={this.handleClick}>Sign Up</Link>
          <Link to="/login"
            className="button session-link login"
            onClick={this.handleClick}>Log In</Link>
          <button onClick={() => login(sampleUser)}
            className="button session-link login">
              Guest Log In
          </button>
        </div>
      );
    }
  }

  handleClick() {
    this.props.clearSessionErrors();
  }

  navHome() {
    this.props.history.push("/");
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="nav">
        <button className="home-link" onClick={this.navHome}>
          <h1>NodeItAll</h1>
        </button>
        <SearchBarContainer />
        <div className="greeting">
          <p>
            { currentUser ? `Hi ${currentUser.username}!` : null }
          </p>
          { this.loginLinks() }
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar);
