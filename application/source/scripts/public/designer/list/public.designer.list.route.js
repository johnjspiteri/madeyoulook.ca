(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.designer.list', {
				url: '',
				views: {
					'page@': {
						templateUrl: 'public/html/public/designer/list/public.designer.list.html',
						controller: 'DesignerListController',
						controllerAs: 'vm'
					}
				},
				resolve:  {
					designersResolve: ['designersList', function(designersList) {
						return designersList.get().$promise;
					}]
				}
			});
	}

	angular
		.module('app.public.designer.list')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
