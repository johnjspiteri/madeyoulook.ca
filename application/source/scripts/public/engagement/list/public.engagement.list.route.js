(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.engagement.list', {
				url: 'rings/',
				views: {
					'content@app.public.engagement': {
						templateUrl: 'public/html/public/engagement/list/public.engagement.list.html',
						controller: 'EngagementListController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.engagement.list')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
