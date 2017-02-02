import axios from 'axios'

export default {
  addTodo(post_text){
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
