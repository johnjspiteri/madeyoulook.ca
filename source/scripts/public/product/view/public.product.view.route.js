(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.product.view', {
				url: '/:_id',
				views: {
					'page@': {
						templateUrl: 'public/html/public/product/view/public.product.view.html',
						resolve:{
							productResolve:['$stateParams','productView', function($stateParams,productView){
								return productView.view({_id: $stateParams._id }).$promise
							}]
						},
						controller: 'ProductViewController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.product.view')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
