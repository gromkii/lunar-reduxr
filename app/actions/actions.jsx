export function addPost(post) {
  return {
    type:'ADD_POST',
    post
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

export function startDispatch(sentStatus) {
  return {
    type:'START_DISPATCH',
    sentStatus
  }
}

export function endDispatch(sentStatus) {
  return {
    type:'END_DISPATCH',
    sentStatus
  }
}
