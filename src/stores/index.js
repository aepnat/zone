import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { zoneReducer } from '../reducers'

var store
export default {
  configure: (initialState) => { // initialState can be null
    const reducers = combineReducers({
      zone: zoneReducer
    })

    if(initialState){
      store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
      )

      return store
    }

    store = createStore(
      reducers,
      applyMiddleware(thunk)
    )

    return store
  },

}
