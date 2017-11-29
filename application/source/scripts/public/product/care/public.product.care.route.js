(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.product.care', {
				url: 'jewellery-care/',
				views: {
					'content@app.public.product': {
						templateUrl: 'public/html/public/product/care/public.product.care.html',
						controller: 'ProductCareController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.product.care')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
