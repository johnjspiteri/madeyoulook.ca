(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.answer', {
				url: 'answers/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/answer/public.answer.html',
						controller: 'AnswerController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.answer')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
