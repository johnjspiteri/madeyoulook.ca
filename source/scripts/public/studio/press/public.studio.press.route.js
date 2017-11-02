(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.land.press', {
				// abstract: true,
				url: 'press/',
				views: {
					'content@app.public.studio': {
						templateUrl: 'public/html/public/studio/press/public.studio.press.html',
						controller: 'StudioPressController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.studio.land.press')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
