(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.wedding.list', {
				url: 'list/',
				views: {
					'content@app.public.wedding': {
						templateUrl: 'public/html/public/wedding/list/public.wedding.list.html',
						controller: 'WeddingListController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.wedding.list')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
