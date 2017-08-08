(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.privacy', {
				url: 'privacy/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/privacy/public.privacy.html',
						controller: 'PrivacyController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.privacy')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
