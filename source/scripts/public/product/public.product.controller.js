(function() { "use strict";

	function Internal() {

		var vm = this;

	}

	angular
		.module('app.public.product')
		.controller('ProductController', Internal);

	Internal.$inject = [];

})();
