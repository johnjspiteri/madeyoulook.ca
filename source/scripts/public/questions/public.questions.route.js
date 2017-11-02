(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.questions', {
				url: 'questions/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/questions/public.questions.html',
						controller: 'QuestionsController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.questions')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
