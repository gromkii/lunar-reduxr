export function addPost(post_text) {
  return {
    type:'ADD_POST',
    post_text
  }
}

export function addPosts(postsArray) {
  return {
    type:'ADD_POSTS',
    postsArray
  }
}

export function setErrorStatus(error) {
  return {
    type:'SET_ERROR_STATUS',
    error
  }
}
