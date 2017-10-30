"use strict";

var express = require('express'),
	controller = require('./api.pool.list.controller.js'),
	router = express.Router();

router.get('/:_id', controller.find);

module.exports = router;