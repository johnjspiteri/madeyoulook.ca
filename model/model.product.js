"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var GiftCardSchema = new Schema({

// var ServiceSchema = new Schema({

var ProductSchema = new Schema({
	detail: {
		title: String,
		designer: Object,
		description: String,
		category: String,
		price: Number,
		style: String,
		sub_category: Array
	},
	type: {
		bracelet: Boolean,
		earring: Boolean,
		necklace: Boolean,
		ring: Boolean
	},
	material: {
		metals: {
			gold: {
				quality: ['10 karat', '14 karat', '18 karat'],
				size: Number
			},
			platinum: {

			},
			palladium: {

			},
			silver: {

			},
			glass: {

			},
			other: {

			}
		}
	},
	gemstones: {
		birthstone: String,
		pearl: Boolean,

	},
	diamonds: {
		carat: {
			weight: Number
		},
		cut: String,
		clarity: String,
		colour: String,
		synthetic: String,
	},
	size: {
		bandwidth: Number,
		length: Number,
		shape: String
	},
	collection: String
});

module.exports = mongoose.model('Product', ProductSchema);