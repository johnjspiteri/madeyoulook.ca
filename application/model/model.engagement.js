"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	title: String,
	description: String,
	sku: String,
	price: Number,
	designer: {
		name: String,
		reference: String
	},
	availability: {
		in_stock: Boolean,
		order: Boolean,
		original: Boolean
	},
	attributes: {
		category: String, // Metal, Diamond, Eternity, Gemstone, Unique
		// sub_category: Array,
		// style: String,
		material: [], // Silver, gold platinum, palladium, zirconium, titanium, cobalt, wood, enamel, meteorite
		measurements: {
			shape: String,
			karat: String, // 10 karat, 14 karat, 18 karat
			size: Number,
			width: Number,
		},
		precious_gemstones: [{
			type: String, // sapphire, emerald, ruby, diamonds
			source: String, // natural, lab grown
			color: String, // pink, orange, yellow, green, blue, purple, grey, white, red, brown, black
			carat: Number, // Future property
			cut: String,
			clarity: String
		}],
		semi_precious_gemstones: [{
			type: String, // amethyst, opal, moonstone, topaz, peridot, tourmaline, tanzanite, aquamarine, zircon, alexandrite, citrine, morganite, spinel, pearl, synthetic
		}],
	},
	images: Array
});

module.exports = mongoose.model('Product', ProductSchema);