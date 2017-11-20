(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.certificates', {
				url: 'gift-certificates/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/certificates/public.certificates.html',
						controller: 'CertificatesController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.certificates')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
