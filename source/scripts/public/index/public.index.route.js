(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.index', {
				url: '',
				views: {
					'modal@': {
						templateUrl: 'public/html/public/modal/public.modal.html',
						controller: 'IndexController',
						controllerAs: 'vm'
					},
					'video@': {
						templateUrl: 'public/html/public/index/video/public.index.video.html',
						controller: 'IndexController',
						controllerAs: 'vm'
					},
					'page@': {
						templateUrl: 'public/html/public/index/public.index.html',
						controller: 'IndexController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.index')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
