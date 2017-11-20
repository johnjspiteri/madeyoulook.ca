(function() { "use strict";

	function Internal() {

		var vm = this;

	}

	angular
		.module('app.public.service')
		.controller('ServiceController', Internal);

	Internal.$inject = [];

})();
