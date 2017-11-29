(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.about.press.list', {
				url: '',
				views: {
					'content@app.public.about': {
						templateUrl: 'public/html/public/about/press/list/public.about.press.list.html',
						controller: 'AboutPressListController',
						controllerAs: 'vm'
					}
				},
				resolve: {
					articlesResolve: ['articlesList', function(articlesList) {
						return articlesList.get().$promise;
					}]
				}
			});
	}

	angular
		.module('app.public.about.press.list')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
