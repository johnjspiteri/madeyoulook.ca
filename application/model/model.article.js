"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	author: String,
	clean: String,
	content: String,
	date:  Date,
	publisher: String,
	title: String
});

module.exports = mongoose.model('Article', ArticleSchema);