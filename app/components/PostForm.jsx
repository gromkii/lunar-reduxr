import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'
import postAPI from 'postAPI'
import axios from 'axios'

export class PostForm extends Component {
  constructor(props) {
    super(props)

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    var { dispatch } = this.props;
    var text = this.refs.post_text.value;

    if (text.length < 5 && text.length) {
      dispatch(actions.setErrorStatus('short'));
    } else if (text.length > 500) {
      dispatch(actions.setErrorStatus('long'));
    } else {
      dispatch(actions.setErrorStatus('valid'));
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    var { dispatch } = this.props
    var text = this.refs.post_text.value;

    if(this.props.error === 'valid') {
      postAPI.addPost(text).then(res => {
        dispatch(actions.addPost(res.data[0]))
      }).catch(err => console.error(err));
    } else {
      this.refs.post_text.focus();
    }
  }

  render() {
    var userMessage = () => {
      switch(this.props.error) {
        case 'short':
          return (<h4 className="error-message">Error, post is too short!</h4>)

        case 'long':
          return (<h4 className="error-message">Error, post is too long!</h4>)

        case 'valid':
        default:
          return null
      }
    }

    return (
      <section>
        <form id="postForm" onSubmit={this._handleSubmit}>
          <textarea ref="post_text" onChange={this._handleChange}></textarea>

          <button className="button expanded">Post</button>
        </form>

        {userMessage()}
      </section>
    )
  }
}

export default connect(state => {
  return { error:state.error }
})(PostForm)
