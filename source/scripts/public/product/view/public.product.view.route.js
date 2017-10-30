(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.product.view', {
				url: '/:_id',
				views: {
					'page@': {
						templateUrl: 'public/html/public/product/view/public.product.view.html',
							controller: 'ProductViewController',
							controllerAs: 'vm'
					},
					resolve: {
						productResolve: ['productView', function (productView) {
							return productView.view().$promise
						}]
					}
				}
			});
	}

	angular
		.module('app.public.product.view')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
