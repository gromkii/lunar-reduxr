import React, { Component } from 'react'
import { connect } from 'react-redux'

export class PostFeed extends Component {
  render() {
    var posts = this.props.postsArray;
    var { sentStatus } = this.props
    function postFeed() {
      if (posts.length) {
        return posts.map(post => {
          return (
            <div key={post.id}>
              <p>{post.post_text}</p>
            </div>
          )
        }).reverse()
      } else if (sentStatus) {
        return (
          <p>Loading posts.. hang on a sec..</p>
        )
      } else {
        return (
          <p>No posts were found!</p>
        )
      }
    }

    return (
      <section>
        {postFeed()}
      </section>
    )
  }
}

export default connect(state => {
  return {
    postsArray:state.postsArray,
    sentStatus:state.sentStatus
  }
})(PostFeed);
