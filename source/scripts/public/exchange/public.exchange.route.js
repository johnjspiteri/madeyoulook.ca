(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.exchange', {
				url: 'exchange-policy/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/exchange/public.exchange.html',
						controller: 'ExchangeController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.exchange')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
