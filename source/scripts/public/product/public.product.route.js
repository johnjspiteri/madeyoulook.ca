(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.product', {
				// abstract: true,
				url: 'product',
				views: {
					'page@': {
						templateUrl: 'public/html/public/product/public.product.html',
						controller: 'ProductController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.product')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
