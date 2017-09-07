var app = require('express')
var router = app.Router()
var controllers = require('../controllers/index')

router.get('/:resource', function(req, res){
  var resource = req.params.resource
  var controller = controllers[resource]

  if(controller == null){
    res.json({
      confirmation: 'failed',
      message: 'Invalid Resource Request: ' + resource
    })

    return
  }

  controller.find(req.query, function(err, results){
    if(err){
      res.json({
        confirmation: 'failed',
        message: err
      })

      return
    }

    res.json({
      confirmation: 'success',
      result: results
    })
  })

})

router.post('/:resource', function(req, res){
  var resource = req.params.resource
  var controller = controllers[resource]

  if(controller == null){
    res.json({
      confirmation: 'failed',
      message: 'Resource not found'
    })

    return
  }

  controller.create(req.body, function(err, result){
    if(err){
      res.json({
        confirmation: 'failed',
        message: err
      })

      return
    }

    res.json({
      confirmation: 'success',
      result: result
    })
  })

})

router.get('/:resource/:id', function(req, res){

  var resource = req.params.resource
  var id = req.params.id
  var controller = controllers[resource]

  if(controller == null){
    res.json({
      confirmation: 'failed',
      message: 'Resource not found'
    })

    return
  }

  controller.findById(id, function(err, zone){
    if(err){
      res.json({
        confirmation: 'failed',
        message: 'not found'
      })

      return
    }

    res.json({
      confirmation: 'success',
      result: zone
    })

  })

});

module.exports = router
