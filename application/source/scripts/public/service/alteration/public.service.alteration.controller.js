(function() { "use strict";

	function Internal($state) {

		var vm = this;
		$state.go('app.public.service.land');

	}

	angular
		.module('app.public.service.land')
		.controller('ServiceAlterationController', Internal);

	Internal.$inject = ['$state'];

})();
