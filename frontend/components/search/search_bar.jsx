import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.requestAllQuestions();
  }

  handleInput(e) {
    this.setState({input: e.currentTarget.value})
  }

  matches() {
    const matches = [];
    if (this.state.input.length === 0) {
        return this.props.questions
    }

    this.props.questions.forEach(question => {

      let titleWords = question.title.split(" ");
      let bodyWords = question.body.split(" ");
      let subTitles = titleWords.map(word => (
        word.slice(0, this.state.input.length).toLowerCase()
      ));
      let subBodies = bodyWords.map(word => (
        word.slice(0, this.state.input.length).toLowerCase()
      ));

      const match = subTitles.concat(subBodies)
            .includes(this.state.input.toLowerCase());
      if (match) {
        matches.push(question)
      }
    });

    if (matches.length === 0) {
      matches.push({
        title: 'No Questions Match'
      });
    }

    return matches;
  }

  update(e) {
    this.setState({input: e.currentTarget.innerText});
  }

  render() {
    let searchResults = this.matches().map((result, i) => {
      return (
        <li onClick={this.update}>{result.title}</li>
      );
    });
    return (
      <div>
        <input type="text"
          placeholder="Search Questions"
          value={this.state.input}
          onChange={this.handleInput}/>
        <ul>{searchResults}</ul>
      </div>
    );
  }


}

export default SearchBar;
