(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.press', {
				abstract: true,
				url: 'press/',
				views: null
			});
	}

	angular
		.module('app.public.studio.press')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
