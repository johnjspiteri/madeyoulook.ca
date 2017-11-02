(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.service.land.antique', {
				url: 'antiques/',
				views: {
					'content@app.public.service': {
						templateUrl: 'public/html/public/service/antique/public.service.antique.html',
						controller: 'ServiceAntiqueController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.service.land.antique')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
