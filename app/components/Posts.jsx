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

    this._handleFeedUpdate = this._handleFeedUpdate.bind(this);
  }

  componentWillMount() {
    axios.get('/posts').then(response => {
      this._handleFeedUpdate(response.data);
    });
  }

  _handleFeedUpdate(posts) {
    this.setState({
      postsArray:posts
    });
  }

  render(){
    function viewData() {
      if (this.state.postsArray.length) {
        return (
          <PostFeed />
        );
      } else {
        return  null;
      }
    }



    return(
      <section className="row top-margin">
        <div className="columns small-6 post-form">
          <h1>Talkr</h1>
          <h4>What's on your mind?</h4>
          <PostForm />
        </div>


        <div className="columns small-6 post-feed">
          {viewData()}
        </div>
      </section>
    )
  }
}
