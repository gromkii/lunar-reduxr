import axios from 'axios'

export default {
  addPost(post_text){
    if (post_text) {
      return axios.post('/posts', {
        post_text
      });
    }
  },

  getPosts(){
    return axios.get('/posts')
  }
}
