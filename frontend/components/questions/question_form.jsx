import React from 'react';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      author_id: -1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ author_id: this.props.currentUser.id });
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
      body: "",
      author_id: -1
    });
  }

  render() {
    return (
      <div className="question-form-container">
        <form className="question-form" onSubmit={ this.handleSubmit }>
          <input type="text"
            value={this.state.title}
            onChange={this.update('title')}
            placeholder="Title" />
          <input type="text"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="Body" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default QuestionForm;
