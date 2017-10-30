(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.product', {
				// abstract: true,
				url: 'jewellery',
				views: {
					'page@': {
						templateUrl: 'public/html/public/product/public.product.html',
						controller: 'ProductController',
						controllerAs: 'vm'
					}
				},
				resolve: {
					productsResolve: ['productsList', function(productsList) {
						return productsList.query().$promise;
					}]
				}
			});
	}

	angular
		.module('app.public.product')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
