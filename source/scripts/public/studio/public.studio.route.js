(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio', {
				abstract: true,
				url: 'studio/',
				views: null
			});
	}

	angular
		.module('app.public.studio')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
