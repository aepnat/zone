import React, { Component } from 'react'
import { Comment, CreateComment } from '../presentation/index'
import { APIManager } from '../../utils'
import actions from '../../actions'
import { connect } from 'react-redux'

class Comments extends Component {
  constructor(){
    super()

    this.state = {
      zone: {},
      list: []
    }
  }

  getDataFromServer(id, callback) {
    APIManager.get(`/api/zone/${id}/comment`, null, (err, res) => {
      if(err){
        alert('ERROR: ' + err.message)
        return
      }

      this.setState({
        list: res.result
      })

      callback()
    })
  }

  submit_comment(comment){
    comment['zone_id'] = this.state.zone._id

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

  componentWillReceiveProps(props){
    if(props.zone.selected_zone){
      this.getDataFromServer(props.zone.selected_zone._id, () => {
        this.setState({
          zone: props.zone.selected_zone
        })
      })
    }
  }

  render() {
    var commentList = this.state.list.map((comment, i) => {
      return (
        <li key={i}><Comment data={comment} /></li>
      )
    })

    return(
      <div className="comments_container">
        <h2>Comments: {(this.state.zone.name) ? this.state.zone.name : ''}</h2>
        <ul>
          {commentList}
        </ul>

        <CreateComment onCreate={this.submit_comment.bind(this)} />

      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    zone: state.zone
  }
}


export default connect(stateToProps, null)(Comments)
