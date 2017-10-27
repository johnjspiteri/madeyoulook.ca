(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.wedding', {
				url: 'weddings/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/wedding/public.wedding.html',
						controller: 'WeddingController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.wedding')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
