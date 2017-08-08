(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.equipment', {
				url: 'equipment-rental/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/studio/equipment/public.studio.equipment.html',
						controller: 'StudioEquipmentController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.studio.equipment')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
