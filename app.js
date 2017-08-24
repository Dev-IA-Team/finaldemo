/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
var http = require("https");
//var request = require("request");
//var sleep = require('sleep');
var express = require('express'); // app server
var bodyParser = require('body-parser'); // parser for post requests
var Conversation = require('watson-developer-cloud/conversation/v1'); // watson sdk

var app = express();

// Bootstrap application settings
app.use(express.static('./public')); // load UI from public folder
app.use(bodyParser.json());

// Create the service wrapper
var conversation = new Conversation({
  // If unspecified here, the CONVERSATION_USERNAME and CONVERSATION_PASSWORD env properties will be checked
  // After that, the SDK will fall back to the bluemix-provided VCAP_SERVICES environment property
  // username: '<username>',
  // password: '<password>',
  // url: 'https://gateway.watsonplatform.net/conversation/api',
  version_date: Conversation.VERSION_DATE_2017_04_21
});

// Endpoint to be call from the client side
app.post('/api/message', function(req, res) {
  var workspace = process.env.WORKSPACE_ID || '<workspace-id>';
  if (!workspace || workspace === '<workspace-id>') {
    return res.json({
      'output': {
        'text': 'The app has not been configured with a <b>WORKSPACE_ID</b> environment variable. Please refer to the ' + '<a href="https://github.com/watson-developer-cloud/conversation-simple">README</a> documentation on how to set this variable. <br>' + 'Once a workspace has been defined the intents may be imported from ' + '<a href="https://github.com/watson-developer-cloud/conversation-simple/blob/master/training/car_workspace.json">here</a> in order to get a working application.'
      }
    });
  }
  var payload = {
    workspace_id: workspace,
    context: req.body.context || {},
    input: req.body.input || {}
  };

  // Send the input to the conversation service
  conversation.message(payload, function(err, data) {
    if (err) {
      return res.status(err.code || 500).json(err);
    }
    return res.json(updateMessage(payload, data));
  });
});

/**
 * Updates the response text using the intent confidence
 * @param  {Object} input The request to the Conversation service
 * @param  {Object} response The response from the Conversation service
 * @return {Object}          The response with the updated message
 */
function updateMessage(input, response) {
console.log("Test");
  var responseText = null;
  if (!response.output) {
    response.output = {};
  } else {

if (response.entities.length > 0){
console.log("test-moi");
	console.log(response.entities[0].entity);
}

if (response.context.short_desc_Json !== "" ){
var short_desc_http = response.context.short_desc_Json;
}

	  //ouvre un ticket
	  
if ( response.context.incident_var === true ){


var options = {
 "method": "POST",
 "hostname": "dev37615.service-now.com",
 "port": null,
 "path": "/api/now/table/incident",
 "headers": {
   "accept": "application/json",
   "content-type": "application/json",
   "authorization": "Basic YWRtaW46Z1VHcFdwS3pQcEV5",
   "cache-control": "no-cache",
   "postman-token": "9a16c542-1154-e7a1-efba-995554f65aa8"
 }
};
var http = require("https");
var req = http.request(options, function (res) {
 var chunks = [];

 res.on("data", function (chunk) {
   chunks.push(chunk);
 });

 res.on("end", function () {
   var body = Buffer.concat(chunks);
   console.log(body.toString());
 });
});

var urgency_var_Json = response.context.urgency_var ;

/* var short_desc_http = response.context.short_desc_Json ; */
 


req.write(JSON.stringify({short_description : short_desc_http , urgency : urgency_var_Json }));



/* req.write(JSON.stringify(data_to_send_json)); */
req.end();

	/* response.output.text = "Incident créé"; */
	
response.context.incident_var = false;
  return response;
	
}
	  // Description + Email outlook 2007 non utile 

if(response.context.desc_first_msg_incident !== "" ){

	var desc_var_bis_Json = response.context.desc_first_msg_incident;
}

	  if(response.context.incident_var_bis === true){
		  		
	  
var options = {
 "method": "POST",
 "hostname": "dev37615.service-now.com",
 "port": null,
 "path": "/api/now/table/incident",
 "headers": {
   "accept": "application/json",
   "content-type": "application/json",
   "authorization": "Basic YWRtaW46Z1VHcFdwS3pQcEV5",
   "cache-control": "no-cache",
   "postman-token": "9a16c542-1154-e7a1-efba-995554f65aa8"
 }
};
var http = require("https");
var req = http.request(options, function (res) {
 var chunks = [];

 res.on("data", function (chunk) {
   chunks.push(chunk);
 });

 res.on("end", function () {
   var body = Buffer.concat(chunks);
   console.log(body.toString());
 });
});

// var desc_var_bis_Json = response.context.short_desc_Json_bis ;

/* var short_desc_http = response.context.short_desc_Json ; */
 


req.write(JSON.stringify({short_description : desc_var_bis_Json, subcategory : 'Email Outlook 2007' }));



/* req.write(JSON.stringify(data_to_send_json)); */
req.end();

	/* response.output.text = "Incident créé"; */

response.context.incident_var_bis = false;
 desc_var_bis_Json = "";
	
  return response;
  	
	  }
	  
	 
	/*  
	  	  // 2007 Email 
	  if(response.context.incident_var_ter === true ){
		  		
	  
var options = {
 "method": "POST",
 "hostname": "dev37615.service-now.com",
 "port": null,
 "path": "/api/now/table/incident",
 "headers": {
   "accept": "application/json",
   "content-type": "application/json",
   "authorization": "Basic YWRtaW46Z1VHcFdwS3pQcEV5",
   "cache-control": "no-cache",
   "postman-token": "9a16c542-1154-e7a1-efba-995554f65aa8"
 }
};

var req = http.request(options, function (res) {
 var chunks = [];

 res.on("data", function (chunk) {
   chunks.push(chunk);
 });

 res.on("end", function () {
   var body = Buffer.concat(chunks);
   console.log(body.toString());
 });
});


// var short_desc_http = response.context.short_desc_Json ;
 


req.write(JSON.stringify({ subcategory : 'Email Outlook 2007' }));



// req.write(JSON.stringify(data_to_send_json)); 
req.end();

	// response.output.text = "Incident créé"; 

response.context.incident_var_ter = false;
	
  return response;
  	
	  }
	  
	  
	  
	  */
	  
	  
	  // incident outlook 2010
	  
	  
	  
 if(response.context.incident_var_quat === true){
		  		
	  
var options = {
 "method": "POST",
 "hostname": "dev37615.service-now.com",
 "port": null,
 "path": "/api/now/table/incident",
 "headers": {
   "accept": "application/json",
   "content-type": "application/json",
   "authorization": "Basic YWRtaW46Z1VHcFdwS3pQcEV5",
   "cache-control": "no-cache",
   "postman-token": "9a16c542-1154-e7a1-efba-995554f65aa8"
 }
};
var http = require("https");
var req = http.request(options, function (res) {
 var chunks = [];

 res.on("data", function (chunk) {
   chunks.push(chunk);
 });

 res.on("end", function () {
   var body = Buffer.concat(chunks);
   console.log(body.toString());
 });
});



 // var short_desc_http2 = response.context.incident_desc_quat ;
 


req.write(JSON.stringify({ short_description :  desc_var_bis_Json  , subcategory : 'Email Outlook 2010' }));



/* req.write(JSON.stringify(data_to_send_json)); */
req.end();

	/* response.output.text = "Incident créé"; */

response.context.incident_var_quat = false;
	 desc_var_bis_Json = "";
  return response;
  	
	  }
	  	  
	  
	  
	  
	  
	  
	  
 /*
	  if(response.context.incident_var_quin === true ){
		  		
	  
var options = {
 "method": "POST",
 "hostname": "dev37615.service-now.com",
 "port": null,
 "path": "/api/now/table/incident",
 "headers": {
   "accept": "application/json",
   "content-type": "application/json",
   "authorization": "Basic YWRtaW46Z1VHcFdwS3pQcEV5",
   "cache-control": "no-cache",
   "postman-token": "9a16c542-1154-e7a1-efba-995554f65aa8"
 }
};

var req = http.request(options, function (res) {
 var chunks = [];

 res.on("data", function (chunk) {
   chunks.push(chunk);
 });

 res.on("end", function () {
   var body = Buffer.concat(chunks);
   console.log(body.toString());
 });
}); 



// var short_desc_http = response.context.short_desc_Json ; 
 


req.write(JSON.stringify({ subcategory : 'Email Outlook 2010' }));



// req.write(JSON.stringify(data_to_send_json)); 
req.end();

	// response.output.text = "Incident créé"; 

response.context.incident_var_quin = false;

	
  return response;
  	
	  }  */
	  
	  
// -----------------------------------------------------------------------------------------------------------	  
// incident partage réseau



if( response.context.$net_share !== ""){

var path_net_share =  response.context.$net_share ;

}

if( response.context.incident_var_net_share === true){

var http = require("https");

var options = {
  "method": "POST",
  "hostname": "dev37615.service-now.com",
  "port": null,
  "path": "/api/now/table/incident",
  "headers": {
    "accept": "application/json",
    "content-type": "application/json",
    "authorization": "Basic YWRtaW46Z1VHcFdwS3pQcEV5",
    "cache-control": "no-cache",
    "postman-token": "1687c9b2-499e-567c-83f7-f8a505de09b5"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ short_description: response.context.$OS_vers + path_net_share,
  subcategory: 'net_share' }));
req.end();

response.context.incident_var_net_share = "";
path_net_share = "";
response.context.$OS_ver ="";


}

// Visio

if( response.context.$post_number !== ""){

var number_of_post = response.context.$post_number;
} 

if( response.context.request_var === true ){



var options = {
  "method": "POST",
  "hostname": "dev37615.service-now.com",
  "port": null,
  "path": "/api/now/table/u_requested_bot_item",
  "headers": {
    "accept": "application/json",
    "content-type": "application/json",
    "authorization": "Basic YWRtaW46Z1VHcFdwS3pQcEV5",
    "cache-control": "no-cache",
    "postman-token": "433ad096-50b1-b2c4-6fac-d5f414aead24"
  }
};
var http = require("https");
var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ u_post_number: number_of_post, u_typeof_asset: 'MS Visio' }));
req.end();

//response.context.os_v = "";
response.context.$postnumber = "";
 response.context.request_var = false ; 

}






















	  // aucune detection de outlook subcat
	  var parsed_var;
		var var_to_parse;
		var numero;
	  
	   if(response.context.incident_var_quin === true){
		  		
	  
var options = {
 "method": "POST",
 "hostname": "dev37615.service-now.com",
 "port": null,
 "path": "/api/now/table/incident",
 "headers": {
   "accept": "application/json",
   "content-type": "application/json",
   "authorization": "Basic YWRtaW46Z1VHcFdwS3pQcEV5",
   "cache-control": "no-cache",
   "postman-token": "9a16c542-1154-e7a1-efba-995554f65aa8"
 }
};
var http = require("https");
var req = http.request(options, function (res) {
 var chunks = [];

 res.on("data", function (chunk) {
   chunks.push(chunk);
 });

 res.on("end", function () {


	console.log("Test function hello");
	var body = Buffer.concat(chunks);
	//console.log(body.result.number.toString());
	 var_to_parse = body;
	console.log(typeof var_to_parse);

	 parsed_var = JSON.parse(var_to_parse);
	numero = parsed_var.result.number;
	
	
	console.log(body.toString());
	console.log(numero);

	






 








// return var_to_parse
 ;});
});


 // var short_desc_var_six_Json = response.context.short_desc_var_six ; 
 


req.write(JSON.stringify({ short_description: desc_var_bis_Json, subcategory : 'Email Other' }));



/* req.write(JSON.stringify(data_to_send_json)); */
req.end();

	/* response.output.text = "Incident créé"; */

response.context.incident_var_quin = false;
desc_var_bis_Json = "";

//console.log( typeof response);

//parsed_var = stringify(parsed_var);

//console.log(parsed_var);
// sleep.sleep(8);
//response.output.text = "Votre incident a été référencé dans SNOW sous :" + var_to_parse;

// console.log( typeof response);
//setTimeout(function(){req.end();},10000);
//response.output.text = numero;
console.log("trace1");
//var blabla = 'toto';
console.log("trace2");
//response = blabla;
console.log("trace3");
  return response.output.text;
  	
	  }
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
}
/*if(numero !== "" && typeof numero !== "undefined"){
setTimeout(function(){ req.end();},10000);
response.output.text = "Voila votre numéro d'incident : " + numero;
} */
  return response;
}
module.exports = app;
