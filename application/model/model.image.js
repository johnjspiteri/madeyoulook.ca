/*jslint node: true */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ImageSchema = new Schema({
	base64: String,
	filename: String,
	filesize: Number,
	filetype: String
});

module.exports = mongoose.model('Image', ImageSchema);

