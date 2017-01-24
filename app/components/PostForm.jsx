import React, { Component } from 'react'
import axios from 'axios'

export default class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error:false
    };

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();

    var data = this.refs.post_text.value;

    if (data.length > 5 && data.length < 500) {
      this.refs.post_text.value = '';
      this.props.handleFormPost(String(data));
      this.setState({
        error:false
      })
    } else {
      this.setState({
        error:true
      });
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
