(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.wedding.custom', {
				url: 'custom-order/',
				views: {
					'content@app.public.wedding': {
						templateUrl: 'public/html/public/wedding/custom/public.wedding.custom.html',
						controller: 'WeddingCustomController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.wedding.custom')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
