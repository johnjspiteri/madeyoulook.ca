(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.jewellery', {
				// abstract: true,
				url: 'jewellery',
				views: {
					'page@': {
						templateUrl: 'public/html/public/jewellery/public.jewellery.html',
						controller: 'JewelleryController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.jewellery')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
