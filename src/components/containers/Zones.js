import React, { Component } from 'react'
import { Zone, CreateZone } from '../presentation/index'
import { APIManager } from '../../utils'
import actions from '../../actions'
import { connect } from 'react-redux'

class Zones extends Component {
  constructor(){
    super()
    this.state = {
      selected: null,
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

  submit(zone){
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

  select_zone(index, zone) {
    this.setState({
      selected: index
    })
    this.props.select_zone(zone)
  }

  render() {
    const listItems = this.state.list.map((zone, i) => {
      let selected = (i==this.state.selected)
      let isActive = (selected) ? 'active' : ''

      return (
        <li className={"list-group-item " + isActive} key={zone._id}><Zone index={i} select={this.select_zone.bind(this)} isSelected={selected} currentZone={zone} /></li>
      )
    })

    return(
      <div>
        <div className="card">
          <ul className="list-group list-group-flush">
            {listItems}
          </ul>
        </div>

        <CreateZone onCreate={this.submit.bind(this)} />
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    zone: state.zone
  }
}

const dispatchToProps = (dispatch) => {
  return {
    select_zone: (zone) => dispatch(actions.select_zone(zone))
  }
}

export default connect(stateToProps, dispatchToProps)(Zones)
