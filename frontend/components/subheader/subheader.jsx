import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class Subheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recent: "",
      trending: "",
      results: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    const { formType } = nextProps;
    const isTypePresent = [
      "recent",
      "trending",
      "results"
    ].includes(formType);

    if (formType !== "results" && formType[0] !== 'q') {
      this.props.requestAllQuestions();
    }

    const newState = merge({
        recent: "",
        trending: "",
        results: ""
      }, {
        [isTypePresent ? formType : "recent"] : "you-are-here"
      }
    );
    this.setState(newState);
  }

  componentDidMount() {
    let { formType } = this.props;
    if (this.props.formType === "") {
      formType = "recent";
    }
    this.setState({
      [formType]: "you-are-here"
    });
  }

  changeTab(tabName) {
    const newState = merge({
      recent: "",
      trending: "",
      results: ""
    }, {
      [tabName]: "you-are-here"
    });
    return e => this.setState(newState);
  }

  renderSearchTab() {
    if (this.props.formType === "results") {
      return (
        <Link to="/results"
          className={`tab ${this.state.results}`}
          onClick={this.changeTab('results')}>Search Results</Link>
      );
    }
  }

  renderTabs() {
    if (!this.props.currentQuestion) {
      return (
        <div className="question-tabs">
          <Link to="/recent"
            className={`tab ${this.state.recent}`}
            onClick={this.changeTab('recent')}>Most Recent</Link>
          <Link to="/trending"
            className={`tab ${this.state.trending}`}
            onClick={this.changeTab('trending')}>Trending</Link>
          { this.renderSearchTab() }
        </div>
      );
    }
  }

  render() {
    const { currentQuestion } = this.props;
    let questionTitle, titleClass;
    if (currentQuestion) {
      questionTitle = currentQuestion.title;
      titleClass = "subtitle";
    } else {
      questionTitle = "Questions";
      titleClass = "";
    }
    return(
      <div className="subheader-container">
        <div className="subtitle-container">
          <h1 className={titleClass}>{ questionTitle }</h1>
        </div>
        { this.renderTabs() }
      </div>
    )
  }
}

export default Subheader;

// <h2>{formType} or {this.navLink()}</h2>
