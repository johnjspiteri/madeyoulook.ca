(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.about.environment', {
				url: 'environment/',
				views: {
					'content@app.public.about': {
						templateUrl: 'public/html/public/about/environment/public.about.environment.html',
						controller: 'AboutEnvironmentController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.about.environment')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
