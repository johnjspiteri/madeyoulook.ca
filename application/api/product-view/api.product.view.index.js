"use strict";

var express = require('express'),
	controller = require('./api.product.view.controller.js'),
	router = express.Router();

router.get('/', controller.index);

module.exports = router;