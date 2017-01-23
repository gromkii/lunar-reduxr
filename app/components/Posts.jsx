import React, { Component } from 'react'
import axios from 'axios'

import PostForm from 'PostForm'
import PostFeed from 'PostFeed'

export default class Posts extends Component {
  constructor(props){
    super(props);

    this.state = {
      postsArray:[]
    }

    this._handleFormPost = this._handleFormPost.bind(this);
  }

  _handleFormPost(formText){
    axios.post('/posts', {
      post_text:formText
    }).then(response => {
      var newArr = this.state.postsArray,
        newPost  = response.data[0];

      newArr.push(newPost);

      this.setState({
        postsArray:newArr
      });
    });
  }

  render(){
    return(
      <section>
        <h1>Posts</h1>

        <PostForm handleFormPost={this._handleFormPost}/>
        <PostFeed />
      </section>
    )
  }
}
