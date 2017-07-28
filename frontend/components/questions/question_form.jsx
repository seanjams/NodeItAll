import React from 'react';
import Highlight from 'react-syntax-highlight';

class QuestionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      plain: "",
      code: "",
      author_id: -1,
      username: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formatBody = this.formatBody.bind(this);
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
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createQuestion, clearQuestionErrors } = this.props;
    clearQuestionErrors();

    const newQuestion = {
      title: this.state.title,
      body: this.formatBody(),
      author_id: this.state.author_id,
      username: this.state.username
    };

    createQuestion(newQuestion);

    this.setState({
      title: "",
      plain: "",
      code: ""
    });
  }

  renderErrors() {
    if (this.props.errors) {
      return this.props.errors.map((err, i) => (
        <li key={`err-${i}`}>{err}</li>
      ));
    }
  }

  formatBody() {
    const { plain, code } = this.state;
    const body = plain || code ? plain.concat("~~$$~~").concat(code) : "";
    return body;
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
            placeholder="Title"
            className="title" />
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

export default QuestionForm;

// <ReactQuill value={this.state.body}
//             onChange={this.update('body')}
//             placeholder="Body Text"
//             modules={modules}
//             formats={formats} />


// <CodeMirror value={this.state.body} onChange={this.update('body')} />
