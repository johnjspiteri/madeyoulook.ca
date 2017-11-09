'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// process.env.NPM_CONFIG_PRODUCTION = true;

if(process.env.NODE_ENV === 'development') {
	var location = require('./build/development.json');
}

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
	ip = process.env.OPENSHIFT_NODEJS_IP || location.ip,
	port = process.env.OPENSHIFT_NODEJS_PORT || location.port,
	connection = '127.0.0.1:27017/madeyoulook',
	server = require('http').createServer(app),
	env = app.get('env');

app.use(compression());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(methodOverride());
app.use(cookieParser());

if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
	connection = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ':' +
		process.env.OPENSHIFT_MONGODB_DB_PASSWORD + '@' +
		process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
		process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
		process.env.OPENSHIFT_APP_NAME;
}

mongoose.connect(connection);

app.use(express.static('./'));

app.use('/api/article-list', require('./api/article-list/api.article.list.index'));
app.use('/api/designer-list', require('./api/designer-list/api.designer.list.index'));
app.use('/api/designer-view', require('./api/designer-view/api.designer.view.index'));
app.use('/api/product-list', require('./api/product-list/api.product.list.index'));
app.use('/api/product-view', require('./api/product-view/api.product.view.index'));

app.use(morgan('tiny'));

if ('production' === env) {
	app.get('/*', function(req, res) {
		res.sendFile(path.resolve('./public/html/index.html'));
	});
}

if ('development' === env || 'test' === env) {
	app.get('/*', function(req, res) {
		res.sendFile(path.resolve('./public/html/development.html'));
	});
}

app.use(errorHandler({
	dumpExceptions: true,
	showStack: true
}));

server.listen(port, ip, function () {});

exports = module.exports = app;