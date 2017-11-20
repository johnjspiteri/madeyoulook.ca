(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.repair.land.cleaning', {
				url: 'cleaning/',
				views: {
					'content@app.public.repair': {
						templateUrl: 'public/html/public/repair/cleaning/public.repair.cleaning.html',
						controller: 'RepairCleaningController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.repair.land.cleaning')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
