export default {
  addTodo(data){
    if (data.length >= 5 && data.length <= 500) {
      this.refs.post_text.value = '';
      this.props.handleFormPost(String(data));
      this.setState({
        error:false
      })
    } else {
      this.setState({
        error:true
      });
    }
  }
}
