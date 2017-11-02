(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.service', {
				abstract: true,
				url: 'services/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/service/public.service.html',
						controller: 'ServiceController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.service')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
