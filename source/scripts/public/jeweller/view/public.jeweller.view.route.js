(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.jeweller.view', {
				url: '/view',
				views: {
					'page@': {
						templateUrl: 'public/html/public/jeweller/view/public.jeweller.view.html',
						controller: 'JewellerViewController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.jeweller.view')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
