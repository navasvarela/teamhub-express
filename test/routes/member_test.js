var member_route = require('../../lib/routes/member');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
  "Hello test" : function(test) {
  	console.log(member_route); 
  	test.done();
   }
});
