(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.repair.land.refinishing', {
				url: 'refinishing/',
				views: {
					'content@app.public.repair': {
						templateUrl: 'public/html/public/repair/refinishing/public.repair.refinishing.html',
						controller: 'RepairRefinishingController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.repair.land.refinishing')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
