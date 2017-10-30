"use strict";

var Designer = require('./../../model/model.designer');

exports.index = function(req, res) {
	console.log('here!');
	Designer.find({}, function(err, designers) {
		if(err) return;
		console.log('designers', designers);
		return res.status(200).json(designers);
	});
};