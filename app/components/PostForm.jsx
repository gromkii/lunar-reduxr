import React, { Component } from 'react'
import axios from 'axios'

export class PostForm extends Component {
  constructor(props) {
    super(props)

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    var { dispatch } = this.props
    var text = this.refs.post_text.value;

    if (text.length < 5) {
      // Error for too short.
      this.refs.post_text.focus();
    } else if (text.length > 500) {
      // Error for too long.
      this.refs.post_text.focus();
    } else {
      dispatch(actions.addPost(this.refs.post_text.value));
      this.refs.text.value = '';
    }
  }

  render() {
    var userMessage = null;

    if (this.state.error) {
      userMessage = (
        <h4 className="error-message">Error, post to long, or too short!</h4>
      );
    } else {
      userMessage = null;
    }

    return (
      <section>
        <form id="postForm" onSubmit={this._handleSubmit}>
          <textarea ref="post_text"></textarea>

          <button className="button expanded">Post</button>
        </form>

        {userMessage}
      </section>
    )
  }
}

export default connect(state => {
  error:state.error
})(PostForm)
