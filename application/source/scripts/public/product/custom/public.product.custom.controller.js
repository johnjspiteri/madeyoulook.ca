(function() { "use strict";

	function Internal() {

		var vm = this;
		vm.products = [];

	}

	angular
		.module('app.public.product.custom')
		.controller('ProductCustomController', Internal);

	Internal.$inject = [];

})();
