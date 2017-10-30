(function() { "use strict";

	function Internal(productsResolve) {

		var vm = this;

		vm.products = productsResolve;
		console.log('products', vm.products);

	}

	angular
		.module('app.public.product')
		.controller('ProductController', Internal);

	Internal.$inject = ['productsResolve'];

})();
