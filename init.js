// import the twitter controller
var TwitterController = require('twit');

// access the the configuration data
const config = require('./config');

// initialize the twitter controller
twitter = new TwitterController(config);

stream = twitter.stream("user");

util = require('util');

child_process = require('child_process');

exec = child_process.exec;
spawn = child_process.spawn;
execFile = child_process.execFile;

console.log("NO ERRORS");