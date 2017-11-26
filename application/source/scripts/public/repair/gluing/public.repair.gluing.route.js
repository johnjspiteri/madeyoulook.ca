(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.repair.gluing', {
				url: 'gluing/',
				views: {
					'content@app.public.repair': {
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
