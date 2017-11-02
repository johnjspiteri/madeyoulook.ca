(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.service.land', {
				url: 'alterations/',
				views: {
					'content@app.public.service': {
						templateUrl: 'public/html/public/service/alteration/public.service.alteration.html',
						controller: 'ServiceAlterationController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.service.land')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
