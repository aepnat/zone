var Zone = require('../models/Zone')
var Comment = require('../models/Comment')

module.exports = {

  find: function(params, callback){
    Zone.find(params, function(err, zones){
      if(err){
        callback(err, null)
        return
      }

      callback(null, zones)
    })
  },

  findById: function(id, callback){
    Zone.findById(id, function(err, zone){
      if(err){
        callback(err, null)
        return
      }

      callback(null, zone)
    })
  },

  findCommentById: function(id, callback){
    Comment.find({zone_id: id}, function(err, comments){
      if(err){
        callback(err, null)
        return
      }

      callback(null, comments)
    })
  },

  create: function(params, callback){
    var zips = params['zipcodes']
    var zip = zips.split(',')
    var newZips = []
    zip.forEach(function(zipCode){
      newZips.push(zipCode.trim())
    })
    params['zipcodes'] = newZips

    Zone.create(params, function(err, zone){
      if(err){
        callback(err, null)
        return
      }

      callback(null, zone)
    })
  },

  update: function(id, params, callback){
    Zone.findByIdAndUpdate(id, params, {new: true}, function(err, zone){
      if(err){
        callback(err, null)
        return
      }

      callback(null, zone)
    })
  },

  delete: function(id, callback){
    Zone.findByIdAndRemove(id, function(err){
      if(err){
        callback(err, null)
        return
      }

      callback(null, null)
    })
  },
}
