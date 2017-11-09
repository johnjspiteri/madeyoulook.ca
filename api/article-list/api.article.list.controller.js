"use strict";

var Article = require('./../../model/model.article');

exports.index = function(req, res) {
	Article.find({}, function(err, articles) {
		if(err) return;
		return res.status(200).json(articles);
	});
};