(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.press', {
				// abstract: true,
				url: 'press/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/studio/press/public.studio.press.html',
						controller: 'StudioPressController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.studio.press')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
