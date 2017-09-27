(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.jeweler.view', {
				url: '/view',
				views: {
					'page@': {
						templateUrl: 'public/html/public/jeweler/view/public.jeweler.view.html',
						controller: 'JewelerViewController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.jeweler.view')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
