import React from 'react';

class QuestionsIndex extends React.Component {
  renderQuestions() {
    return this.props.questions.map((question, idx) => (
      <li>
        <h1>{ question }</h1>
        <p>{}</p>
      </li>
    ));
  }

  render() {
    console.log(this.props.questions);
    return (
      <div>
        <h1>Questions</h1>
        <ul>{ this.renderQuestions() }</ul>
      </div>
    );
  }

}

export default QuestionsIndex;
