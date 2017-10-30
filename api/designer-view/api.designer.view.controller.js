"use strict";

var Designer = require('./../../model/model.designer');

exports.index = function(req, res) {
	Designer.findById(req.params._id, function(err, response) {
		if(err) return;
		return res.status(200).send(response);
	});
};