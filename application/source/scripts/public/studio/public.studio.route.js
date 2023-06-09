(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio', {
				abstract: true,
				url: 'studio/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/studio/public.studio.html'
			}
		}
			});
	}

	angular
		.module('app.public.studio')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
