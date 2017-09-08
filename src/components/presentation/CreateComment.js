import React, { Component } from 'react'

class CreateComment extends Component{
  constructor() {
    super()
    this.state = {
      comment: {
        body: '',
        username: ''
      }
    }
  }

  update_comment(e){
    let comment = Object.assign({}, this.state.comment)
    comment[e.target.id] = e.target.value
    this.setState({
      comment: comment
    })
  }

  submit(e){
    this.props.onCreate(this.state.comment)
  }

  render() {
    return(
      <div className="form-container">
        <h3>Create comment</h3>
        <input id="username" onChange={this.update_comment.bind(this)} className="form-control" type="text" placeholder="Username" />
        <input id="body" onChange={this.update_comment.bind(this)} className="form-control" type="text" placeholder="Comment" />
        <button onClick={this.submit.bind(this)} className="btn btn-info">Submit Comment</button>

      </div>
    )
  }
}

export default CreateComment
