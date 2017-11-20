(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.land.press', {
				abstract: true,
				url: 'press/',
				views: null
			});
	}

	angular
		.module('app.public.studio.land.press')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
