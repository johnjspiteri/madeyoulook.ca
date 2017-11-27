(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.award', {
				url: 'entrepreneur-award/',
				views: {
					'content@app.public.studio': {
						templateUrl: 'public/html/public/studio/award/public.studio.award.html',
						controller: 'StudioAwardController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.studio.award')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
