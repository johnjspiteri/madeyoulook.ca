(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.repair.refinishing', {
				url: 'refinishing/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/repair/refinishing/public.repair.refinishing.html',
						controller: 'RepairRefinishingController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.repair.refinishing')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
