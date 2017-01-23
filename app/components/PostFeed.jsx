import React, { Component } from 'react'

import Post from 'Post'

export default class PostFeed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      postArray:[]
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.posts !== prevProps.posts) {
      this.setState({
        postArray:this.props.posts
      });
    }
  }

  render() {
    var viewPost = null;

    if (this.props.posts) {

      {this.props.posts.map(post => {
        <Post postData={post}/>
      })}
    } else {
      viewPost = null;
    }

    return (
      <section>
        {viewPost}
        <h3>Fuck.</h3>
      </section>
    )
  }
}
