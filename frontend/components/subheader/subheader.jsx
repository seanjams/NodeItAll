import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Subheader extends React.Component {

  // navLink() {
  //   if (this.props.formType === 'login') {
  //     return <Link to="/signup">Sign Up</Link>;
  //   } else {
  //     return <Link to="/login">Log In</Link>;
  //   }
  // }

  render() {
    let login_selected = "";
    let signup_selected = "";
    if (this.props.formType === "login") {
      login_selected = "you-are-here";
    } else {
      signup_selected = "you-are-here";
    }
    return (
      <div className="subheader-container">
        <Link to="/login" className={login_selected}>Log In</Link>
        <Link to="/signup" className={signup_selected}>Sign Up</Link>
      </div>
    );
  }

}

export default withRouter(Subheader);

// <h2>{formType} or {this.navLink()}</h2>
