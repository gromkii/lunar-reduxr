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

    console.log(data.length);

    if (data.length > 5 && data.length < 500) {
      axios.post('/posts', {
        post_text:data
      }).then(returning => {

        this.setState({
          error:false
        });

        this.refs.post_text = null;
      }).catch(error => {
        console.error(error);
      });
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
        <h4>Error, post to long, or too short!</h4>
      );
    } else {
      userMessage = null;
    }

    return (
      <section>
        <h3>Hey there, what's going on?</h3>
        <form id="postForm" onSubmit={this._handleSubmit}>
          <textarea ref="post_text"></textarea>

          <button className="button expanded">Post</button>
        </form>

        {userMessage}
      </section>
    )
  }
}
