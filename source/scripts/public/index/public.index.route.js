(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.index', {
				url: '',
				views: {
					'page@': {
						templateUrl: 'public/html/public/index/public.index.html',
						controller: 'IndexController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.index')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
