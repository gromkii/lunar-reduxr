import React, { Component } from 'react'

const PostFeed = ({posts}) => {
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

export default PostFeed;
