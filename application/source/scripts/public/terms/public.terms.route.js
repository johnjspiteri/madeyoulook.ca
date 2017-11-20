(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.terms', {
				url: 'terms',
				views: {
					'page@': {
						templateUrl: 'public/html/public/terms/public.terms.html',
						controller: 'TermsController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.terms')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
