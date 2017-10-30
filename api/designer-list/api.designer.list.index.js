"use strict";

var express = require('express'),
	controller = require('./api.designer.list.controller.js'),
	router = express.Router();

router.get('/:_id', controller.find);

module.exports = router;