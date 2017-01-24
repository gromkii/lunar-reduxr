import React, { Component } from 'react'

export default class Main extends Component {
  render(){
    return (
      <main>
        <div className="row">
          <div className="column small-12">
            {this.props.children}
          </div>
        </div>
      </main>
    )
  }
}
