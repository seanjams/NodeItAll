import React from 'react';
import Highlight from 'react-syntax-highlight';
import { languages } from '../../util/codebox_languages';

class QuestionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      plain: "",
      code: "",
      author_id: -1,
      username: "",
      language: "javascript"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formatBody = this.formatBody.bind(this);
    this.selectLanguage = this.selectLanguage.bind(this);
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
    return e => {
      // console.log(e.key);
      // let val = e.target.value;
      // if (e.keyCode === 9) {
      //   let start = e.target.selectionStart;
      //   let end = e.target.selectionEnd;
      //   val = val.substring(0, start) + '\t' + val.substring(end);
      //   e.target.selectionStart = e.target.selectionEnd = start + 1;
      // }

      this.setState({
        [property]: val
      })
    };
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
    const body = plain ? plain.concat("~~$$~~").concat(code) : "";
    return body;
  }

  selectLanguage(e) {
    e.preventDefault();
    this.setState({language: e.target.value});
  }

  renderOptions() {
    const displayText = Object.keys(languages);
    return Object.values(languages).map((lang, i) => (
      <option value={lang} key={`lang-${i}`}>{ displayText[i] }</option>
    ));
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
            placeholder="what's your question?"
            className="title" />
          <div className="body-form">
            <textarea className="plain" wrap="soft" cols="20"
              value={this.state.plain}
              onChange={this.update('plain')}
              placeholder="plain text goes here" />
            <div className="code">
              <select onChange={this.selectLanguage}
                value={this.state.language}>
                { this.renderOptions() }
              </select>
              <textarea wrap="soft" cols="20"
                onChange={this.update('code')}
                placeholder="code goes here"
                className="code-text" />
              <Highlight lang={this.state.language}
                value={
                  this.state.code == "" ? "Preview" : this.state.code
                }
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
