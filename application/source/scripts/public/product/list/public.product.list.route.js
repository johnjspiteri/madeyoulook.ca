(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.product.list', {
				url: '',
				views: {
					'content@app.public.product': {
						templateUrl: 'public/html/public/product/list/public.product.list.html',
						controller: 'ProductListController',
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
		.module('app.public.product.list')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
