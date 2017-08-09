(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.return', {
				url: 'returns/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/return/public.return.html',
						controller: 'ReturnController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.return')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();