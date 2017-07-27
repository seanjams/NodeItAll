import React from 'react';
import QuestionIndexItem from './question_index_item';
import SubheaderContainer from '../subheader/subheader_container';
import { Route } from 'react-router-dom';

class QuestionsIndex extends React.Component {

  componentDidMount() {
    if (this.props.formType !== "results") {
      this.props.requestAllQuestions();
    }
  }

  renderQuestions() {
    if (this.props.questions) {
      if (this.props.formType === "trending") {
        return this.props.trendingQuestions.map((question, i) => (
          <li key={`question-${i}`}>
            <QuestionIndexItem question={question} />
          </li>
        ));
      } else {
        return this.props.questions.map((question, i) => (
          <li key={`question-${i}`}>
            <QuestionIndexItem question={question} />
          </li>
        ));
      }
    }
  }

  render() {
    return (
      <div className="questions-index-container">
        <ul className="questions-index">{ this.renderQuestions() }</ul>
      </div>
    );
  }

}

export default QuestionsIndex;
