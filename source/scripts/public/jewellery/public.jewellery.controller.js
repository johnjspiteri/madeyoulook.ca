(function() { "use strict";

	function Internal() {

		var vm = this;

		vm.products = [{
			tags: ['WEDDING'],
			title: 'Purchase of The Year',
			price: 12.99
		},{
			tags: ['RING', 'METAL', 'FAKE GOLD'],
			title: 'Purchase of The Year',
			price: 12.99
		},{
			tags: ['RING', 'METAL', 'FAKE GOLD'],
			title: 'Purchase of The Year',
			price: 12.99
		},{
			tags: ['RING', 'METAL', 'FAKE GOLD'],
			title: 'Purchase of The Year',
			price: 12.99
		}]

	}

	angular
		.module('app.public.jewellery')
		.controller('JewelleryController', Internal);

	Internal.$inject = [];

})();
