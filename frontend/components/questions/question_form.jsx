import React from 'react';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      author_id: -1,
      username: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.setState({
        author_id: this.props.currentUser.id,
        username: this.props.currentUser.username
      });
    }
  }

  componentWillUnmount() {
    this.props.clearQuestionErrors();
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { currentUser, createQuestion } = this.props;
    createQuestion(this.state);
    this.setState({
      title: "",
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
        <form className="question-form" onSubmit={ this.handleSubmit }>
          <h2>New Question</h2>
          <ul className="error-list">{ this.renderErrors() }</ul>
          <input type="text"
            value={this.state.title}
            onChange={this.update('title')}
            placeholder="Title" />
          <input type="text"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="Body" />
          <div className="button-container">
            <button className="button">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default QuestionForm;
