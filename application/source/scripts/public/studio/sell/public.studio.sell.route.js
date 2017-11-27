(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.sell', {
				url: 'sell-your-work/',
				views: {
					'content@app.public.studio': {
						templateUrl: 'public/html/public/studio/sell/public.studio.sell.html',
						controller: 'StudioSellController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.studio.sell')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
