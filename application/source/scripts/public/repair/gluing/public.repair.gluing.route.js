(function() { "use content@app.public.repair";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.repair.land.gluing', {
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
		.module('app.public.repair.land.gluing')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
