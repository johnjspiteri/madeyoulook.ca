(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.jeweler', {
				url: 'jeweler',
				views: {
					'page@': {
						templateUrl: 'public/html/public/jeweler/public.jeweler.html',
						controller: 'JewelerController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.jeweler')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
