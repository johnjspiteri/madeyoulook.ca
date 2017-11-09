"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	author: String,
	date: {
		default: Date.now,
		type: Date
	},
	publisher: String,
	title: String
});

module.exports = mongoose.model('Article', ArticleSchema);