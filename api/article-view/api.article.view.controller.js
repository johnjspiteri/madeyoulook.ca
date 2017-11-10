"use strict";

var Article = require('./../../model/model.article');

exports.index = function(req, res) {
	Article.findById(req.params._id, function(err, response) {
		if(err) return;
		return res.status(200).send(response);
	});
};