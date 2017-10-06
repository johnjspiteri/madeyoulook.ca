(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.designer.view', {
				url: '/view',
				views: {
					'page@': {
						templateUrl: 'public/html/public/designer/view/public.designer.view.html',
						controller: 'DesignerViewController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.designer.view')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
