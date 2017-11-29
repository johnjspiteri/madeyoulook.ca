(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.engagement.custom', {
				url: 'custom-order/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/engagement/custom/public.engagement.custom.html',
						controller: 'EngagementCustomController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.engagement.custom')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
