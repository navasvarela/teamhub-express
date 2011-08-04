var Member = require('../models/member');

var index = function(req,res) {
   Member.find({},function(err, members) {
     res.json(members);
   }); 
};

var save_member = function(req,res) {
  console.log('save_member');
  var member = new Member();
  
  ['name', 'initial', 'email'].forEach(function(field) {
	if (typeof(field) !== 'undefined') {
            console.log(req);
            member[field] = req.body[field];
	} else {
	  console.log("Field "+field+" is undefined");
	}
  });
  member.save(function(err) {
      console.log(err);
  });
  res.send('OK');
};

module.exports = function(app) {
   app.get('/members', index);
   app.put('/members', save_member);
};


