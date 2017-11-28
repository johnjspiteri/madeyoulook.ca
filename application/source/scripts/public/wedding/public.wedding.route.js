(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.wedding', {
				url: 'wedding/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/wedding/public.wedding.html'
					}
				}
			});
	}

	angular
		.module('app.public.wedding')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
