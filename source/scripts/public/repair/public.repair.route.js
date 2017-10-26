(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.repair', {
				url: 'repairs/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/repair/public.repair.html',
						controller: 'RepairController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.repair')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
