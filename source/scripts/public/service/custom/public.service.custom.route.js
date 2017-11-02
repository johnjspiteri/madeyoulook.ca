(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.service.custom', {
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
		.module('app.public.service.custom')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
