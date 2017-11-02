(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.repair.land.soldering', {
				url: 'soldering/',
				views: {
					'content@app.public.repair': {
						templateUrl: 'public/html/public/repair/soldering/public.repair.soldering.html',
						controller: 'RepairSolderingController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.repair.land.soldering')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
