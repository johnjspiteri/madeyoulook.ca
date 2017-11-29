(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.product.view', {
				url: 'view/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/product/list/view/public.product.list.view.html',
							controller: 'ProductViewController',
							controllerAs: 'vm'
					},
					// resolve: {
					// 	productResolve: ['productView', function (productView) {
					// 		return productView.view().$promise
					// 	}]
					// }
				}
			});
	}

	angular
		.module('app.public.product.list.view')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
