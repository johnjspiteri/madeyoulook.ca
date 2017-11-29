"use strict";

var Article = require('./../../model/model.article');

module.exports = function(req, res) {

	Article.findOne({clean: req.params.clean}, function(err, response) {
		if(err) return;

		return res.status(200).send(response);
	});
};