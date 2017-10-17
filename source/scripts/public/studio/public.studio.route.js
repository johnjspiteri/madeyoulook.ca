(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio', {
				abstract: true,
				url: 'studio/'
				// views: {
				// 	'page@': {
				// 		templateUrl: 'public/html/public/studio/public.studio.html',
				// 		controller: 'StudioController',
				// 		controllerAs: 'vm'
				// 	}
				// }
			});
	}

	angular
		.module('app.public.studio')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
