(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.service.engraving', {
				url: 'engravings/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/service/engraving/public.service.engraving.html',
						controller: 'ServiceEngravingController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.service.engraving')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
