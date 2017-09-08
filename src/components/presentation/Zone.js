import React, { Component } from 'react'

class Zone extends Component {

  on_select_title(e) {
    e.preventDefault()
    this.props.select(this.props.index, this.props.currentZone)
  }

  render() {

    const zones = this.props.currentZone.zipcodes.join(", ")
    const title = (this.props.isSelected) ? <a className="selected" href="#">{this.props.currentZone.name}</a> : <a href="#">{this.props.currentZone.name}</a>

    return(
      <div onClick={this.on_select_title.bind(this)}>
        {title} <span className="badge badge-secondary">{zones}</span> <span className="badge badge-secondary">{(this.props.currentZone.num_comments) ? this.props.currentZone.num_comments : '0'} comments</span>
      </div>
    )
  }
}

export default Zone
