import React from 'react';
import Highlight from 'react-syntax-highlight';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plain: "",
      code: "",
      author_id: -1,
      question_id: -1,
      username: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.setState({
        author_id: this.props.currentUser.id,
        question_id: this.props.match.params.questionId,
        username: this.props.currentUser.username
      });
    }
  }

  componentWillUnmount() {
    this.props.clearAnswerErrors();
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createAnswer } = this.props;
    this.props.clearAnswerErrors();
    const newAnswer = {
      body: this.formatBody(),
      author_id: this.state.author_id,
      question_id: this.state.question_id,
      username: this.state.username
    };
    createAnswer(newAnswer);
    this.setState({
      plain: "",
      code: ""
    });
  }

  formatBody() {
    const { plain, code } = this.state;
    const body = plain || code ? plain.concat("~~$$~~").concat(code) : "";
    return body;
  }

  renderErrors() {
    if (this.props.errors) {
      return this.props.errors.map((err, i) => (
        <li key={`err-${i}`}>{err}</li>
      ));
    }
  }

  render() {
    return (
      <div className="form">
        <form className="answer-form" onSubmit={ this.handleSubmit }>
          <h2>New Answer</h2>
          <ul className="error-list">{ this.renderErrors() }</ul>
            <div className="body-form">
              <textarea className="plain" wrap="soft" cols="20"
                value={this.state.plain}
                onChange={this.update('plain')}
                placeholder="Plain Text" />
              <div className="code">
                <textarea wrap="soft" cols="20"
                  onChange={this.update('code')}
                  placeholder="Javascript" />
                <Highlight lang={"javascript"}
                  value={this.state.code}
                  className="highlight" />
              </div>
            </div>
          <div className="button-container">
            <button className="button">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AnswerForm;
