var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var	ObjectId = Schema.ObjectId;
	

var Project = new Schema({
    id :ObjectId,
    name :String,
    start_date :Date,
    iteration_length :Number,
    point_scale :Number,
    owner : [Member]
});

mongoose.model('Project',Project);

module.exports = mongoose.model('Project');
