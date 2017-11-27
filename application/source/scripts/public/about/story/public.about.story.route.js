(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.about.story', {
				url: 'our-story/',
				views: {
					'content@app.public.about': {
						templateUrl: 'public/html/public/about/story/public.about.story.html',
						controller: 'AboutStoryController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.about.story')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
