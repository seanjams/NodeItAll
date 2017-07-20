import React from 'react';
import { Link } from 'react-router-dom';

class Subheader extends React.Component {
  componentDidMount() {
    this.props.clearErrors();
  }

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
        <Link to="/login"
          className={login_selected}
          onClick={this.props.clearErrors}>Log In</Link>
        <Link to="/signup"
          className={signup_selected}
          onClick={this.props.clearErrors}>Sign Up</Link>
      </div>
    );
  }

}

export default Subheader;

// <h2>{formType} or {this.navLink()}</h2>
