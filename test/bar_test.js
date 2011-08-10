var bar = require('../lib/bar');
var assert = require('assert');

exports['test bar'] = function() {
	var hello = bar.bar(null);
    assert.equal(hello,'bar');
};
