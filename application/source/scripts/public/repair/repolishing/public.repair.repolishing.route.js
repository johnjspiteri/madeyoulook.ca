(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.repair.land.repolishing', {
				url: 'repolishing/',
				views: {
					'content@app.public.repair': {
						templateUrl: 'public/html/public/repair/repolishing/public.repair.repolishing.html',
						controller: 'RepairRepolishingController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.repair.land.repolishing')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
