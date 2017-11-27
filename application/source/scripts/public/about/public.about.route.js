(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.about', {
				abstract: true,
				url: 'about/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/about/public.about.html'
			}
		}
			});
	}

	angular
		.module('app.public.about')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
