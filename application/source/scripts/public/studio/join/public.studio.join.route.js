(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.join', {
				url: 'join-our-studio/',
				views: {
					'content@app.public.studio': {
						templateUrl: 'public/html/public/studio/join/public.studio.join.html',
						controller: 'StudioJoinController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.studio.join')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
