var mongoose = require('mongoose')

var Schema = mongoose.Schema;
var CommentSchema = new Schema({
  zone_id: {type: Schema.ObjectId, required: true},
  username: {type: String, default:''},
  body: {type: String, default: ''},
  timestamp: {type:Date, default:Date.now()}
});

module.exports = mongoose.model('CommentSchema', CommentSchema)
