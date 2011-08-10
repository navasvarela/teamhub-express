var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Story = new Schema( {
	id : ObjectId,
    title : String,
    type : { type : String, enum : ['bug', 'chore', 'feature', 'release'] },
    estimate : Number,
    requester : [Member],
	added_date : Date,
	owned_by : [Member],
	description : String,
	comments : String, // TODO: Comments will be another entity
	status : { type : String, enum : ['not started', 'started', 'finished', 'delivered', 'accepted', 'rejected']} ,
    iteration : String

});

mongoose.model('Story', Story);

module.exports = mongoose.model('Story');
