(function() { "use strict";

	function Internal($state) {

		var vm = this;
		// $state.go('app.public.service');

	}

	angular
		.module('app.public.service.alteration')
		.controller('ServiceAlterationController', Internal);

	Internal.$inject = ['$state'];

})();
