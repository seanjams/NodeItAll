import React from 'react';
import QuestionIndexItem from './question_index_item';

class QuestionsIndex extends React.Component {

  componentWillMount() {
    this.props.requestAllQuestions();
  }

  renderQuestions() {
    console.log(this.props.questions);
    return this.props.questions.map((question, i) => (
      <li key={`question-${i}`}>
        <QuestionIndexItem question={question} />
      </li>
    ));
  }

  render() {
    return (
      <div className="questions-index">
        <h1>Questions</h1>
        <ul>{ this.renderQuestions() }</ul>
      </div>
    );
  }

}

export default QuestionsIndex;
