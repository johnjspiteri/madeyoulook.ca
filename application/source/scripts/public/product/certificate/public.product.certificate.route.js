(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.product.certificate', {
				url: 'gift-certificates/',
				views: {
					'content@app.public.product': {
						templateUrl: 'public/html/public/product/certificate/public.product.certificate.html',
						controller: 'ProductCertificateController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.product.certificate')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
