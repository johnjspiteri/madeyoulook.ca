(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.land.environment', {
				// abstract: true,
				url: 'environment/',
				views: {
					'content@app.public.studio': {
						templateUrl: 'public/html/public/studio/environment/public.studio.environment.html',
						controller: 'StudioEnvironmentController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.studio.land.environment')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
