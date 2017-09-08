import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return(
      <div className="card" style={{marginBottom:'20px'}}>
        <div className="card-body">
          <h4 className="card-title">{this.props.data.body}</h4>
          <p className="card-text"><small className="text-muted">Created by {this.props.data.username} on {this.props.data.timestamp}</small></p>
        </div>
      </div>
    )
  }
}

export default Comment
