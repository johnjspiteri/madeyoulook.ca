(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.press.view', {
				url: 'view/',
				views: {
					'content@app.public.studio': {
						templateUrl: 'public/html/public/studio/press/view/public.studio.press.view.html',
						controller: 'StudioPressViewController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.studio.press.view')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
