(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.land.career', {
				// abstract: true,
				url: 'careers/',
				views: {
					'content@app.public.studio': {
						templateUrl: 'public/html/public/studio/career/public.studio.career.html',
						controller: 'StudioCareerController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.studio.land.career')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
