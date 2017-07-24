import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class Subheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recent: "",
      trending: "",
      all: ""
    };
  }

  componentDidMount() {
    let { formType } = this.props;
    if (formType === "") {
      formType = "all";
    }
    this.setState({
      [formType]: "you-are-here"
    });
  }

  // renderLoginTabs() {
  //   let login_selected = "";
  //   let signup_selected = "";
  //   if (this.props.formType === "login") {
  //     login_selected = "you-are-here";
  //   } else {
  //     signup_selected = "you-are-here";
  //   }
  //   return (
  //     <div className="subheader-container login-tabs">
  //       <Link to="/login"
  //         className={`tab ${login_selected}`}
  //         onClick={this.props.clearSessionErrors}>Log In</Link>
  //       <Link to="/signup"
  //         className={`tab ${signup_selected}`}
  //         onClick={this.props.clearSessionErrors}>Sign Up</Link>
  //     </div>
  //   );
  // }

  changeTab(tabName) {
    const newState = merge({
      recent: "",
      trending: "",
      all: ""
    }, {
      [tabName]: "you-are-here"
    });
    return e => this.setState(newState);
  }

  renderQuestionTabs() {
    return (
      <div className="subheader-container">
        <h1>Questions</h1>
        <div className="question-tabs">
          <Link to="/"
            className={`tab ${this.state.all}`}
            onClick={this.changeTab('all')}>All</Link>
          <Link to="/recent"
            className={`tab ${this.state.recent}`}
            onClick={this.changeTab('recent')}>Most Recent</Link>
          <Link to="/trending"
            className={`tab ${this.state.trending}`}
            onClick={this.changeTab('trending')}>Trending</Link>
        </div>
      </div>
    );
  }

  render() {
    return(
      <div className="subheader-container">
        <h1>Questions</h1>
        <div className="question-tabs">
          <Link to="/"
            className={`tab ${this.state.all}`}
            onClick={this.changeTab('all')}>All</Link>
          <Link to="/recent"
            className={`tab ${this.state.recent}`}
            onClick={this.changeTab('recent')}>Most Recent</Link>
          <Link to="/trending"
            className={`tab ${this.state.trending}`}
            onClick={this.changeTab('trending')}>Trending</Link>
        </div>
      </div>
    )
  }
}

export default Subheader;

// <h2>{formType} or {this.navLink()}</h2>
