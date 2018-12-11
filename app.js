var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config=require('./config');
var setupController = require('./controllers/setupController.js');

var port = process.env.PORT || 3000;


app.use('/assets',express.static(__dirname+'/public'));
app.set('view enjine', 'ejs');

mongoose.connect(config.getDBConnectionString());
setupController(app);

app.listen(port);