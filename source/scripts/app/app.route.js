(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state("app", {
				abstract: true,
				url: "",
				views: null
			});
	}

	angular
		.module("app")
		.config(internal);

	internal.$inject = ["$stateProvider"];

})();
