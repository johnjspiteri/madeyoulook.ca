(function() { "use strict";

	function Internal() {

		var vm = this;

		vm.products = [{
			tags: ['Ring', 'Metal', 'Fake Gold'],
			title: 'Purchase of The Year',
			price: 12.99
		},{
			tags: ['Ring', 'Metal', 'Fake Gold'],
			title: 'Purchase of The Year',
			price: 12.99
		},{
			tags: ['Ring', 'Metal', 'Fake Gold'],
			title: 'Purchase of The Year',
			price: 12.99
		},{
			tags: ['Ring', 'Metal', 'Fake Gold'],
			title: 'Purchase of The Year',
			price: 12.99
		}]

	}

	angular
		.module('app.public.product')
		.controller('ProductController', Internal);

	Internal.$inject = [];

})();
