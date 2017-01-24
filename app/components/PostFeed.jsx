import React, { Component } from 'react'

export default class PostFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var postFeed = this.props.posts.map(post => {
      return (
        <p key={post.id}>
          {post.post_text}
        </p>
      )
    })

    return (
      <section>
        {postFeed.reverse()}
      </section>
    )
  }
}
