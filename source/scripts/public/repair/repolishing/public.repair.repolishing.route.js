(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.repair.repolishing', {
				url: 'repolishing/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/repair/repolishing/public.repair.repolishing.html',
						controller: 'RepairRepolishingController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.repair.repolishing')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
