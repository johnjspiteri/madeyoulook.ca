(function() { "use strict";

	function Internal() {

		var vm = this;
		vm.products = [];

	}

	angular
		.module('app.public.wedding.custom')
		.controller('WeddingCustomController', Internal);

	Internal.$inject = [];

})();
