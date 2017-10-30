(function() { "use strict";

	function Internal(productResolve) {

		var vm = this;
		vm.product = productResolve;

	}

	angular
		.module('app.public.product.view')
		.controller('ProductViewController', Internal);

	Internal.$inject = ['productResolve'];

})();
