(function() { "use strict";

	function Internal() {

		var vm = this;
		vm.search = {
			category: ["Vintage", "Modern", "Classic", "Creative"],
			type: ["Diamond Sapphire", "Ruby With Stones"],
			material: ["Gold-Yellow", "Gold-White", "Gold-Rose", "Gold-Green", "Platinum", "Palladium", "Alternative", "Titanium", "Zirconium", "Carbon Fiber"],
			color: ["Black", "Blue", "Champagne", "Chocolate", "Rough"]
		};

	}

	angular
		.module('app.public.wedding')
		.controller('WeddingController', Internal);

	Internal.$inject = [];

})();
