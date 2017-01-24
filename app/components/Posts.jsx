import React, { Component } from 'react'
import axios from 'axios'

import PostForm from 'PostForm'
import PostFeed from 'PostFeed'

export default class Posts extends Component {
  constructor(props){
    super(props);

    this.state = {
      postsArray:[]
    }

    this._handleFormPost = this._handleFormPost.bind(this);
    this._handleFeedUpdate = this._handleFeedUpdate.bind(this);
  }

  componentWillMount() {
    axios.get('/posts').then(response => {
      this._handleFeedUpdate(response.data);
    });
  }

  _handleFormPost(formText){
    axios.post('/posts', {
      post_text:formText
    }).then(response => {
      var newArr = this.state.postsArray,
        newPost  = response.data[0];

      newArr.push(newPost);

      this._handleFeedUpdate(newArr);
    });
  }

  _handleFeedUpdate(posts) {
    this.setState({
      postsArray:posts
    });
  }

  render(){
    var viewData = null;

    if (this.state.postsArray.length) {
      viewData = (
        <PostFeed posts={this.state.postsArray} />
      );
    } else {
      viewData = null;
    }


    return(
      <section className="row">
        <div className="columns small-6">
          <h1>Talkr</h1>

          <PostForm handleFormPost={this._handleFormPost}/>
        </div>


        <div className="columns small-6">
          {viewData}
        </div>
      </section>
    )
  }
}
