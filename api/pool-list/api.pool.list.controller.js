"use strict";

var Pool = require('./../model/api.model.designer');

exports.find = function(req, res) {
	Pool.find({'participants.reference': {"$in": req.params._id}}, function(err, pools) {
		if(err) return
		return res.status(200).json(pools);
	});
};

exports.show = function(req, res) {
	Pool.findOne({_id: req.params._id}, function(err, response) {
		if(err) return
		return res.status(200).send(response);
	});
};