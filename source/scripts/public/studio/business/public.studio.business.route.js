(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.land.business', {
				// abstract: true,
				url: 'business/',
				views: {
					'content@app.public.studio': {
						templateUrl: 'public/html/public/studio/business/public.studio.business.html',
						controller: 'StudioBusinessController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.studio.land.business')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
