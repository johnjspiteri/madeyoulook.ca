(function() {
	'use strict';

	function routes($stateProvider) {

		$stateProvider
			.state('app.public.error', {
				url: '404/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/error/public.error.html',
						controller: 'Error'
					}
				}
			});
	}

	angular
		.module('app.public.error')
		.config(routes);

		routes.$inject = ['$stateProvider'];

})();
