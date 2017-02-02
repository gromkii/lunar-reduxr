import React, { Component } from 'react'
import { connect } from 'react-redux'

export class PostFeed extends Component {
  render() {
    var posts = this.props.postsArray;
    function postFeed() {
      if (posts.length) {
        return posts.map(post => {
          return (
            <div key={post.id}>
              <p>{post.post_text}</p>
            </div>
          )
        }).reverse()
      } else {
        return (
          <h3>No posts currently found!</h3>
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
  return { postsArray:state.postsArray }
})(PostFeed);
