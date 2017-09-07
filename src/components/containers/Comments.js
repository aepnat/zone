import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import { APIManager } from '../../utils'

class Comments extends Component {
  constructor(){
    super()

    this.state = {
      comment: {
        username: '',
        body: '',
      },
      list: []
    }
  }

  componentDidMount() {
    APIManager.get('/api/comment', null, (err, res) => {
      if(err){
        alert('ERROR: ' + err.message)
        return
      }

      this.setState({
        list: res.result
      })
    })
  }

  submit_comment(){
    let comment = Object.assign({}, this.state.comment)

    APIManager.post('/api/comment', comment, (err, res) => {
      if(err){
        alert('ERROR: ' + err.message)
        return
      }

      let comments = Object.assign([], this.state.list)
      comments.push(res.result)
      this.setState({
        list: comments
      })
    })
  }

  update_username(e) {
    let update_comment = Object.assign({}, this.state.comment)
    update_comment['username'] = e.target.value

    this.setState({
      comment: update_comment
    })
  }

  update_body(e) {
    let update_comment = Object.assign({}, this.state.comment)
    update_comment['body'] = e.target.value

    this.setState({
      comment: update_comment
    })
  }

  render() {
    var commentList = this.state.list.map((comment, i) => {
      return (
        <li key={i}><Comment data={comment} /></li>
      )
    })

    return(
      <div className="comments_container">
        <h2>Comments: Zone 1</h2>
        <ul>
          {commentList}
        </ul>

        <div className="form-container">
          <input onChange={this.update_username.bind(this)} className="form-control" type="text" placeholder="Username" />
          <input onChange={this.update_body.bind(this)} className="form-control" type="text" placeholder="Comment" />
          <button onClick={this.submit_comment.bind(this)} className="btn btn-info">Submit Comment</button>
        </div>
      </div>
    )
  }
}

export default Comments
