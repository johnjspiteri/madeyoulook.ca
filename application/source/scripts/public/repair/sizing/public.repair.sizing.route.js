(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.repair.sizing', {
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
		.module('app.public.repair.sizing')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
