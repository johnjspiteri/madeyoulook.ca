(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.about.press', {
				abstract: true,
				url: 'press/',
				views: null
			});
	}

	angular
		.module('app.public.about.press')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
