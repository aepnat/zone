import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import Home from './components/layout/Home'

const app = (
  <Provider store={store.configure(null)}>
    <Home />
  </Provider>
)

// class App extends Component {
//   render(){
//     return (
//       <Home />
//     )
//   }
// }

ReactDOM.render(app, document.getElementById('root'))
