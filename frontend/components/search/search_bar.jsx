import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: "",
      errors: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  matches() {
    const matches = [];
    if (this.state.input.length === 0) {
      return matches;
    }

    this.props.questions.forEach(question => {
      const titlePhrases = [];
      const bodyPhrases = [];
      const titleWords = question.title.split(" ");
      const titleLength = titleWords.length;
      const bodyWords = question.body.split(" ");
      const bodyLength = bodyWords.length;
      const input = this.state.input.toLowerCase();

      let match = false;

      for (let i = 0; i < titleLength; i++) {
        titlePhrases.push(titleWords.join(" ").toLowerCase());
        titleWords.shift();
      }

      for (let j = 0; j < bodyLength; j++) {
        bodyPhrases.push(bodyWords.join(" ").toLowerCase());
        bodyWords.shift();
      }

      titlePhrases.concat(bodyPhrases).forEach(phrase => {
        if (phrase.startsWith(input)) {
          match = true;
        }
      });

      if (match) {
        matches.push(question);
      }
    });

    if (matches.length === 0) {
      this.setState({errors: "No search results"});
      setTimeout(() => this.setState({errors: ""}), 2500);
    }
    return matches;
  }

  handleSubmit(e) {
    e.preventDefault();
    const matchesArr = this.matches();
    const matches = {};
    if (matchesArr.length === 0) {
      this.props.requestAllQuestions();
    } else {
      matchesArr.forEach(question => (
        matches[question.id] = question
      ));
      this.props.receiveQuestions(matches);
      this.props.history.push("/results");
    }
  }

  update(e) {
    this.setState({
      input: e.currentTarget.value,
      errors: ""
    });
  }

  render() {
    return (
      <div className="search-container">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <button className="search-button">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
          <input type="text"
            placeholder="Search Questions"
            value={this.state.input}
            onChange={this.update} />  
        </form>
        <p>{ this.state.errors }</p>
      </div>
    );
  }
}

export default withRouter(SearchBar);
