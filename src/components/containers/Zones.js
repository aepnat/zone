import React, { Component } from 'react'
import Zone from '../presentation/Zone'
import { APIManager } from '../../utils'

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
    APIManager.get('/api/zone', null, (err, res) => {
      if(err){
        alert('ERROR: ' + err.message)
        return
      }

      this.setState({
        list: res.result
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

    APIManager.post('/api/zone', zone, (err, res) => {
      if(err){
        alert('Error Submit: ' + err)
        return
      }

      let new_zone = res.result

      let list = Object.assign([], this.state.list)
      list.push(new_zone)
      this.setState({
        zone: {
          name: '',
          zipcodes: '',
          num_comments: '0'
        },
        list: list
      })
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
