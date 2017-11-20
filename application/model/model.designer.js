"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DesignerSchema = new Schema({
	awards: Array,
	bio: String,
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

module.exports = mongoose.model('Designer', DesignerSchema);