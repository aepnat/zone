import constants from '../constants'

const initialState = {
  selected_zone: null
}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state)

  switch(action.type){
    case constants.SELECT_ZONE:
      newState['selected_zone'] = action.data
      return newState

    default:
      return state
  }
}
