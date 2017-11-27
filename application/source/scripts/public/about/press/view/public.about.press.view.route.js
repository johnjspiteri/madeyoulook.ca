(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.about.press.view', {
				url: ':clean/',
				views: {
					'content@app.public.about': {
						templateUrl: 'public/html/public/about/press/view/public.about.press.view.html',
						controller: 'StudioPressViewController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.about.press.view')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
