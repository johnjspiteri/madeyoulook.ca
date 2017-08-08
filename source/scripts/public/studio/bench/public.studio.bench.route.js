(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.studio.bench', {
				url: 'bench-rental/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/studio/bench/public.studio.bench.html',
						controller: 'StudioBenchController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.studio.bench')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
