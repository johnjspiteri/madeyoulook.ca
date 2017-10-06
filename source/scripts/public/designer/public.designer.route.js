(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.designer', {
				url: 'designers',
				views: {
					'page@': {
						templateUrl: 'public/html/public/designer/public.designer.html',
						controller: 'DesignerController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.designer')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
