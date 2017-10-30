"use strict";

var Product = require('./../../model/model.product');

exports.index = function(req, res) {
	console.log('here!');
	Product.find({}, function(err, products) {
		if(err) return;
		console.log('products', products);
		return res.status(200).json(products);
	});
};