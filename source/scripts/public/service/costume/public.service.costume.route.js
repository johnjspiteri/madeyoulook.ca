(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.service.costume', {
				url: 'costumes/',
				views: {
					'content@app.public.service': {
						templateUrl: 'public/html/public/service/costume/public.service.costume.html',
						controller: 'ServiceCostumeController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.service.costume')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
