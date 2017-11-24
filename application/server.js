'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// process.env.NPM_CONFIG_PRODUCTION = true;
var connection = '';

var express = require('express'),
	mongoose = require('mongoose'),
	morgan = require('morgan'),
	path = require('path'),
	methodOverride = require('method-override'),
	compression = require('compression'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	errorHandler = require('errorhandler'),
	app = express(),
	server = require('http').createServer(app),
	env = app.get('env');


if(process.env.NODE_ENV === 'development') {
	connection = '127.0.0.1:27017/madeyoulook';
	var location = require('./development.json');
	server = app.listen(location.port, location.ip);
}

if(process.env.NODE_ENV === 'production') {
	connection = 'database:27017/madeyoulook';
	server = app.listen(80, '0.0.0.0');
}


app.use(compression());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(methodOverride());
app.use(cookieParser());

mongoose.connect(connection);

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next()
});

app.use(express.static('./'));

app.use('/api/article-list', require('./api/article-list/api.article.list.index'));
app.use('/api/article-view', require('./api/article-view/api.article.view.index'));
app.use('/api/designer-list', require('./api/designer-list/api.designer.list.index'));
app.use('/api/designer-view', require('./api/designer-view/api.designer.view.index'));
app.use('/api/product-list', require('./api/product-list/api.product.list.index'));
app.use('/api/product-view', require('./api/product-view/api.product.view.index'));

app.use(morgan('dev'));

if ('production' === env) {
	app.get('*', function(req, res) {
		res.sendFile(__dirname + '/public/html/index.html');
	});
}

if ('development' === env || 'test' === env) {
	app.get('*', function(req, res) {
		res.sendFile(__dirname + '/public/html/development.html');
	});
}

app.use(errorHandler({
	dumpExceptions: true,
	showStack: true
}));