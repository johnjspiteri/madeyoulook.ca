(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.facility', {
				// abstract: true,
				url: 'facilities/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/studio/facility/public.studio.facility.html',
						controller: 'StudioFacilityController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.studio.facility')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
