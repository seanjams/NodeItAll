import React from 'react';

class NavBar extends React.Component {


  loginLinks() {
    return(
      <div className="login-links">
        
      </div>
    )
  }



  render() {
    const currentUser = this.props.currentUser
    return(
      <p>
        {currentUser ? currentUser.username : "Welcome! Please log in"}
      </p>
    )
  }
}

export default NavBar;
