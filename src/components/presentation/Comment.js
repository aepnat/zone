import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return(
      <div className="comment_container">
        <span className="body">{this.props.data.body}</span> <br />
        <span className="username"><i>{this.props.data.username}</i></span> | <span className="timestamp"><i>{this.props.data.timestamp}</i></span>
      </div>
    )
  }
}

export default Comment
