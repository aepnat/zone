import React, { Component } from 'react'

class CreateZone extends Component{
  constructor(){
    super()
    this.state = {
      zone: {
        name: '',
        zipcodes: '',
        num_comments: '0'
      }
    }
  }

  update_zone(e) {
    let zone = Object.assign({}, this.state.zone);
    zone[e.target.id] = e.target.value
    this.setState({
      zone: zone
    })
  }

  submit(){
    this.props.onCreate(this.state.zone)
  }

  render() {
    return(
      <div className="form-container">
        <h3>Create Zone</h3>
        <input id="name" onChange={this.update_zone.bind(this)} value={this.state.zone.name} className="form-control" type="text" placeholder="Name" />
        <input id="zipcodes" onChange={this.update_zone.bind(this)} value={this.state.zone.zipcodes} className="form-control" type="text" placeholder="Zip Codes" />
        <button onClick={this.submit.bind(this)} className="btn btn-danger">Add Zone</button>

      </div>
    )
  }
}

export default CreateZone
