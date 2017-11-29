(function() { "use strict";

	function Internal() {

		var vm = this;
		vm.products = [];

	}

	angular
		.module('app.public.engagement.custom')
		.controller('EngagementCustomController', Internal);

	Internal.$inject = [];

})();
