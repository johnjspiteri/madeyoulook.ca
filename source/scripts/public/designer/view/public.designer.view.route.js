(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.designer.view', {
				url: 'view/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/designer/view/public.designer.view.html',
						controller: 'DesignerViewController',
						controllerAs: 'vm'
					}
				},
				// resolve:  {
				// 	designerResolve: ['designerView', function(designerView) {
				// 		return designerView.query({}).$promise;
				// 	}]
				// }
			});
	}

	angular
		.module('app.public.designer.view')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
