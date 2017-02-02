import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import PostForm from 'PostForm'
import PostFeed from 'PostFeed'

export default class Posts extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {

  }


  render(){
    return(
      <section className="row top-margin">
        <div className="columns small-6 post-form">
          <h1>Talkr</h1>
          <h4>What's on your mind?</h4>
          <PostForm />
        </div>


        <div className="columns small-6 post-feed">
          <PostFeed />
        </div>
      </section>
    )
  }
}
