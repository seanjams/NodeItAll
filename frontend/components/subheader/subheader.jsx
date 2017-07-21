import React from 'react';
import { Link } from 'react-router-dom';

class Subheader extends React.Component {
  componentDidMount() {
    this.props.clearErrors();
  }

  renderLoginTabs() {
    let login_selected = "";
    let signup_selected = "";
    if (this.props.formType === "login") {
      login_selected = "you-are-here";
    } else {
      signup_selected = "you-are-here";
    }
    return (
      <div className="subheader-container login-tabs">
        <Link to="/login"
          className={`tab ${login_selected}`}
          onClick={this.props.clearErrors}>Log In</Link>
        <Link to="/signup"
          className={`tab ${signup_selected}`}
          onClick={this.props.clearErrors}>Sign Up</Link>
      </div>
    );
  }

  renderQuestionTabs() {
    let recent_selected = "";
    let trending_selected = "";
    let all_selected = "";
    if (this.props.formType === "mostrecent") {
      recent_selected = "you-are-here";
    } else if (this.props.formType === "trending") {
      trending_selected = "you-are-here";
    } else {
      all_selected = "you-are-here";
    }
    return (
      <div className="subheader-container">
        <h1>Questions</h1>
        <div className="question-tabs">
          <Link to="/"
            className={`tab ${all_selected}`}
            onClick={this.props.clearErrors}>All</Link>
          <Link to="/mostrecent"
            className={`tab ${recent_selected}`}
            onClick={this.props.clearErrors}>Most Recent</Link>
          <Link to="/trending"
            className={`tab ${trending_selected}`}
            onClick={this.props.clearErrors}>Trending</Link>
        </div>
      </div>
    );
  }

  render() {
    const { formType } = this.props;
    if (formType === 'login' || formType === 'signup') {
      return this.renderLoginTabs()
    } else {
      return this.renderQuestionTabs()
    }
  }
}

export default Subheader;

// <h2>{formType} or {this.navLink()}</h2>
