import React, { Component } from 'react'

class Zone extends Component {

  render() {

    const zones = this.props.currentZone.zipcodes.join(", ")

    return(
      <div className="zone_container">
        <h2><a href="#">{this.props.currentZone.name}</a></h2>
        <span>{zones}</span><br />
        <span>{this.props.currentZone.num_comments} comments</span>
      </div>
    )
  }
}

export default Zone
