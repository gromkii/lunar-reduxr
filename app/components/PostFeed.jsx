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
      } else if (!sentStatus && !posts.length){
        return (
          <h3>No posts found!</h3>
        )
      } else if (sentStatus) {
        return (
          <h3>Loading posts.. hang on a sec..</h3>
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
