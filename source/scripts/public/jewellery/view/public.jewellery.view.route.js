(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.jewellery.view', {
				url: '/view',
				views: {
					'page@': {
						templateUrl: 'public/html/public/jewellery/view/public.jewellery.view.html',
						controller: 'JewelleryViewController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.jewellery.view')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
