(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.about', {
				// abstract: true,
				url: 'about/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/studio/about/public.studio.about.html',
						controller: 'StudioAboutController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.studio.about')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
