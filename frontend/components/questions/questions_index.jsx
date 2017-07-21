import React from 'react';
import QuestionIndexItem from './question_index_item';
import SubheaderContainer from '../subheader/subheader_container';

class QuestionsIndex extends React.Component {

  componentWillMount() {
    this.props.requestAllQuestions();
  }

  renderQuestions() {
    return this.props.questions.map((question, i) => (
      <li key={`question-${i}`}>
        <QuestionIndexItem question={question} />
      </li>
    ));
  }

  render() {
    console.log(this.props);
    return (
      <div className="questions-index-container">
        <SubheaderContainer formType={this.props.formType} />
        <ul className="questions-index">{ this.renderQuestions() }</ul>
      </div>
    );
  }

}

export default QuestionsIndex;
