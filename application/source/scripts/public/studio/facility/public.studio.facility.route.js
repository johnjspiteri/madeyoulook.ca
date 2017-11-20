(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.land.facility', {
				// abstract: true,
				url: 'facilities/',
				views: {
					'content@app.public.studio': {
						templateUrl: 'public/html/public/studio/facility/public.studio.facility.html',
						controller: 'StudioFacilityController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.studio.land.facility')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
