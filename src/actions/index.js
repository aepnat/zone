import constants from '../constants'

export default {

  select_zone: (zone) => {
    return {
      type: constants.SELECT_ZONE,
      data: zone
    }
  }

}
