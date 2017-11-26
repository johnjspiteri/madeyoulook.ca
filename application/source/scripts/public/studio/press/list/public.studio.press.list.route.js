(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.press.list', {
				url: 'list/',
				views: {
					'content@app.public.studio': {
						templateUrl: 'public/html/public/studio/press/list/public.studio.press.list.html',
						controller: 'StudioPressListController',
						controllerAs: 'vm'
					}
				},
				resolve: {
					articlesResolve: ['articlesList', function(articlesList) {
						return articlesList.query().$promise;
					}]
				}
			});
	}

	angular
		.module('app.public.studio.press.list')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
