(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.jewellery.wedding', {
				url: 'wedding/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/jewellery/wedding/public.jewellery.wedding.html',
						controller: 'JewelleryWeddingController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.jewellery.wedding')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
