export function addPost(post_text) {
  return {
    type:'ADD_POST',
    post_text
  }
}

export function setErrorStatus(error) {
  return {
    type:'SET_ERROR_STATUS',
    error
  }
}
