(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.custom', {
				url: 'custom-design/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/custom/public.custom.html',
						controller: 'CustomController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.custom')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
