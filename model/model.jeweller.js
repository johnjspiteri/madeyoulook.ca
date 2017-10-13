"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JewellerSchema = new Schema({
	awards: Array,
	contact: {
		phone: Number,
		email: String
	},
	certificates: Array,
	description: String,
	images: Array,
	name: {
		first: String,
		last: String
	},
	school: String,
	social: {
		facebook: String,
		instagram: String,
		linkedin: String
	},
	style: Array

});

module.exports = mongoose.model('Jeweller', JewellerSchema);