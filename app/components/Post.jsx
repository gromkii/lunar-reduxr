import React, { Component } from 'react'

export default class Post extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <h4>{this.props.postData}</h4>
    )
  }
}
