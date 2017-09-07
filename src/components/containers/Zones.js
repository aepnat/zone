import React, { Component } from 'react'
import Zone from '../presentation/Zone'
import superagent from 'superagent'

class Zones extends Component {
  constructor(){
    super()
    this.state = {
      zone: {
        name: '',
        zipcodes: '',
        num_comments: '0'
      },
      list: []
    }
  }

  componentDidMount(){
    superagent
    .get('/api/zone')
    .query(null)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err){
        alert('ERROR: ' + err)
        return
      }

      this.setState({
        list: res.body.result
      })
    })
  }

  update_zone(e) {
    let zone = Object.assign({}, this.state.zone);
    zone[e.target.id] = e.target.value
    this.setState({
      zone: zone
    })
  }

  submit(){
    let zone = Object.assign({}, this.state.zone)

    let list = Object.assign([], this.state.list)
    list.push(zone)
    this.setState({
      zone: {
        name: '',
        zipcodes: '',
        num_comment: '0'
      },
      list: list
    })
  }

  render() {
    const listItems = this.state.list.map((zone, i) => {
      return (
        <li key={zone._id}><Zone currentZone={zone} /></li>
      )
    })

    return(
      <div>
        <ul>
          {listItems}
        </ul>

        <div className="form-container">
          <input id="name" onChange={this.update_zone.bind(this)} value={this.state.zone.name} className="form-control" type="text" placeholder="Name" />
          <input id="zipcodes" onChange={this.update_zone.bind(this)} value={this.state.zone.zipcodes} className="form-control" type="text" placeholder="Zip Codes" />
          <button onClick={this.submit.bind(this)} className="btn btn-danger">Add Zone</button>
        </div>
      </div>
    )
  }
}

export default Zones
