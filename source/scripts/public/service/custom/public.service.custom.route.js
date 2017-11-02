(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.service.land.custom', {
				url: 'custom/',
				views: {
					'content@app.public.service': {
						templateUrl: 'public/html/public/service/custom/public.service.custom.html',
						controller: 'ServiceCustomController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.service.land.custom')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
