(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.repair.gluing', {
				url: 'gluing/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/repair/gluing/public.repair.gluing.html',
						controller: 'RepairGluingController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.repair.gluing')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
