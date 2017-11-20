(function() { "use strict";

	function Internal() {

		var vm = this;
		vm.search = {
			category: ["Solitaire", "3 Stone", "Vintage", "Halo", "Modern", "Classic", "Creative", "Side Stone"],
			type: ["Garnet", "Tourmaline", "Opal", "Aquamarine", "Citrine", "Pearl", "Promise Ring"],
			material: ["Gold-Yellow", "Gold-White", "Gold-Rose", "Gold-Green", "Platinum", "Palladium"],
			color: ["Black", "Blue", "Champagne", "Chocolate", "Rough"]
		};

	}

	angular
		.module('app.public.engagement.list')
		.controller('EngagementListController', Internal);

	Internal.$inject = [];

})();
