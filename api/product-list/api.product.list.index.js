"use strict";

var express = require('express'),
	controller = require('./api.product.list.controller.js'),
	router = express.Router();

router.get('/', controller.index);

module.exports = router;