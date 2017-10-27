(function() { "use strict";

	function Internal() {

		var vm = this;

		vm.backdrop = false;

		vm.close = function() {
			vm.backdrop = false;
		};

	}

	angular
		.module('app.public.index')
		.controller('IndexController', Internal);

	Internal.$inject = [];

})();
