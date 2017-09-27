(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.jeweller', {
				url: 'jeweller',
				views: {
					'page@': {
						templateUrl: 'public/html/public/jeweller/public.jeweller.html',
						controller: 'JewellerController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.jeweller')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
