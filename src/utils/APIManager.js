import superagent from 'superagent'

export default {

  get: (url, params, callback) => {
    superagent
    .get(url)
    .query(params)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err){
        callback(err, null)
        return
      }

      const confirmation = res.body.confirmation
      if(confirmation !== 'success'){
        callback({message: res.body.messsage}, null)
        return
      }

      callback(null, res.body)
    })
  },

  post: (url, body, callback) => {
    superagent
    .post(url)
    .send(body)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err){
        callback(err, null)
        return
      }

      const confirmation = res.body.confirmation
      if(confirmation !== 'success'){
        callback({message: res.body.messsage}, null)
        return
      }

      callback(null, res.body)
    })
  },

  put: () => {

  },

  delete: () => {

  }

}
