(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.repair.land', {
				url: 'land/',
				views: {
					'content@app.public.repair': {
						templateUrl: 'public/html/public/repair/land/public.repair.land.html',
						controller: 'RepairCheckingController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.repair.land')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
