(function() { "use strict";

	function Internal() {

		var vm = this;

	}

	angular
		.module('app.public.service.custom')
		.controller('ServiceCustomController', Internal);

	Internal.$inject = [];

})();
