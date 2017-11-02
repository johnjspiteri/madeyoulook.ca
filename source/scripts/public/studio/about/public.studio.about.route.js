(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.about', {
				// abstract: true,
				url: 'about/',
				views: {
					'content@app.public.studio': {
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
