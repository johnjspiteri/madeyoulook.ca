(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.repair.checking', {
				url: 'checking/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/repair/checking/public.repair.checking.html',
						controller: 'RepairCheckingController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.repair.checking')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
