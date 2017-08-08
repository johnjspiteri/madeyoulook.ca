(function() { "use strict";

	function Internal() {

		var vm = this;

	}

	angular
		.module('app.public.index')
		.controller('IndexController', Internal);

	Internal.$inject = [];

})();
