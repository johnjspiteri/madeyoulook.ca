(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.designer', {
				abstract: true,
				url: 'designers/',
				views: null
			});
	}

	angular
		.module('app.public.designer')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
