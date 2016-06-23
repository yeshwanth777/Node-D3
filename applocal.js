/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express'),
    cors = require('cors'),
    app = express();
    app.use(cors());

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
//var cfenv = require('cfenv');

// create a new express server
//var app = express();


// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

app.get('/cloud', function(req, res){

var username = "";
var password = "";
var auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
var request = require('request');
var url = "https://6c52582-b743-4524-856f-bff6a179ae34-bluemix.cloudant.com/canadaweather/_all_docs?include_docs=true&conflicts=true&limit=1&descending=true";
var data1 = [];
var data2 = [];

request.get( {
    url : url,
    headers : {
        "Authorization" : auth
    }
  }, function(error, response, body) {
      //var iotdata = JSON.parse(body);
      //return body;
      console.log(body);
//      data1 = iotdata.rows[0].doc.ctObj;
//      data2 = iotdata.rows[0].doc.ltObj;
//      console.log(data1);
//      console.log(data2);
  } );
});

// get the app environment from Cloud Foundry
//var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(3000, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + 3000);
});
