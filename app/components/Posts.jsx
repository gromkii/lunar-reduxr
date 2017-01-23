import React, { Component } from 'react'

import PostForm from 'PostForm'
import PostFeed from 'PostFeed'

export default class Posts extends Component {
  render(){
    return(
      <section>
        <h1>Posts</h1>

        <PostForm />
        <PostFeed />
      </section>
    )
  }
}
