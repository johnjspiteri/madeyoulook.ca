(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.repair.land.sizing', {
				url: 'ring-sizing/',
				views: {
					'content@app.public.repair': {
						templateUrl: 'public/html/public/repair/sizing/public.repair.sizing.html',
						controller: 'RepairSizingController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.repair.land.sizing')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
