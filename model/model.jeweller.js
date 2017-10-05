"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JewellerSchema = new Schema({
	awards: String,
	background: String,
	certification: Array,
	collection: String,
	experience: String,
	name: String,
	school: String,
	specialty: String,
	style: String,
	sub_type: String,
	type: String

});

module.exports = mongoose.model('Jeweller', JewellerSchema);