(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.engagement', {
				url: 'engagement/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/engagement/public.engagement.html'
					}
				}
			});
	}

	angular
		.module('app.public.engagement')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
