(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.career', {
				// abstract: true,
				url: 'careers/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/studio/career/public.studio.career.html',
						controller: 'StudioCareerController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.studio.career')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
