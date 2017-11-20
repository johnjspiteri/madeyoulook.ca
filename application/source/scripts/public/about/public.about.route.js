(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider

			.state('app.public.about', {
				url: 'about/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/about/public.about.html',
						controller: 'AboutController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.about')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
