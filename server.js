
// Your server.js file should 
// require the basic npm packages we've
//  used in class: express, body-parser and path.
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = 8070;

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/*+json'
}));
//================================

//store static files in static/public
var staticContentFolder = __dirname + '/public';
app.use(express.static(staticContentFolder));

//Routes

var htmlRoutes = require('./routing/html-routes');
var apiRoutes = require('./routing/api-routes');

htmlRoutes.getRoot(app);
htmlRoutes.getSurvey(app);





// require('./routing/api_routes.js')(app);

app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});

// This route will also be used to handle the compatibility logic.
// You should save the data in
//  your app as an array of objects
//  . Each of these objects should roughly follow the format below.

//