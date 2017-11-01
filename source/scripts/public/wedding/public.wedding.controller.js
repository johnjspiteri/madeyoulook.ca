(function() { "use strict";

	function Internal() {

		var vm = this;
	}

	angular
		.module('app.public.wedding')
		.controller('WeddingController', Internal);

	Internal.$inject = [];

})();
