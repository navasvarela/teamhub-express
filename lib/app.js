
/**
 * Module dependencies.
 */

var express = require('express');
var mongoose = require('mongoose');
var everyauth = require('everyauth');
var app = module.exports = express.createServer();

// Configuration
//
everyauth.twitter.consumerKey('hyOJzCip7mO7uHwiOyPIg')
  .consumerSecret('PkSEF34ijCJc9cV4QT0M32xhBDMVMy1x5gitGUDedM')
  .findOrCreateUser(function(session, accessToken, accessTokenSecret, twitterUserData) {
    console.log(twitterUserData);    
  });

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({secret: "5566745f2b5b279b1b13427e52f60eda"}));
  app.use(everyauth.middleware());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
//  everyauth.helpExpress(app);
});

app.configure('development', function(){
  app.use(
    express.logger(), 
    express.errorHandler({ dumpExceptions: true, showStack: true })
  ); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});


// Routes
app.get('/', function(req,res) {
   res.sendfile('./public/index.html');
});
require('./routes/member')(app);

// connect to mongodb

mongoose.connect('mongodb://localhost/teamhub-dev');
app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
