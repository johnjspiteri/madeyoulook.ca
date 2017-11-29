(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.about.press.view', {
				url: ':clean/',
				resolve: {
					articleResolve: ['$stateParams', 'articleView', function($stateParams, articleView) {
						return articleView.get({clean: $stateParams.clean}).$promise;
					}]
				},
				views: {
					'content@app.public.about': {
						templateUrl: 'public/html/public/about/press/view/public.about.press.view.html',
						controller: 'AboutPressViewController',
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
