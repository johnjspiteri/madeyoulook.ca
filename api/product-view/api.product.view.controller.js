"use strict";

var Product = require('./../../model/model.product');

exports.index = function(req, res) {
	Product.findById(req.params._id, function(err, response) {
		if(err) return;
		return res.status(200).send(response);
	});
};