(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.product.wedding', {
				url: 'wedding/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/product/wedding/public.product.wedding.html',
						controller: 'ProductWeddingController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.product.wedding')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
