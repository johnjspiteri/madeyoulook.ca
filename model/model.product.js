"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	bandwidth: Number,
	birthstone: String,
	bracelet: Boolean,
	carat: Number,
	category: String,
	clarity: String,
	collection: String,
	colour: String,
	cut: String,
	detail: {
		title: String,
		description: String,
		category: String,
		sub_category: Array
	},
	designer: Object,
	earring: Boolean,
	gemstone: String,
	length: Number,
	material: String,
	metal: String,
	necklace: Boolean,
	pearl: Boolean,
	price: Number,
	ring: Boolean,
	shape: String,
	style: String,
	sub_category: Array,
	type: Object

});

module.exports = mongoose.model('Product', ProductSchema);