(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.product.custom', {
				url: 'custom-order/',
				views: {
					'content@app.public.product': {
						templateUrl: 'public/html/public/product/custom/public.product.custom.html',
						controller: 'ProductCustomController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.product.custom')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
