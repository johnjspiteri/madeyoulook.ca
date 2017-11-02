(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.service.alteration', {
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
		.module('app.public.service.alteration')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
