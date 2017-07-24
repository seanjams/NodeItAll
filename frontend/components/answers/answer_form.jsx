import React from 'react';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
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
    const { currentUser, createAnswer } = this.props;
    createAnswer(this.state);
    this.setState({
      body: ""
    });
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
          <input type="text"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="Answer" />
          <div className="button-container">
            <button className="button">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AnswerForm;
