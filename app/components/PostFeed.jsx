import React, { Component } from 'react'
import { connect } from 'react-redux'

export class PostFeed extends Component {
  render() {
    var posts = this.props.postsArray;

    var postFeed = posts.map(post => {
      return (
        <p key={post.id}>
          {post.post_text}
        </p>
      )
    });

    return (
      <section>
        {postFeed.reverse()}
      </section>
    )
  }
}

export default connect(state => {
  return { postsArray:state.postsArray }
})(PostFeed);
