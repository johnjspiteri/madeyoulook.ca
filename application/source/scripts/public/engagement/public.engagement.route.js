(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.engagement', {
				url: 'engagements/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/engagement/public.engagement.html',
						controller: 'EngagementController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.engagement')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
