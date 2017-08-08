(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.contact', {
				url: 'contact/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/contact/public.contact.html',
						controller: 'ContactController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.contact')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
