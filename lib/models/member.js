var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Member = new Schema({
  id :ObjectId,
  name :String, 
  initial :String, 
  email :String });
mongoose.model('Member', Member);

module.exports = mongoose.model('Member');
