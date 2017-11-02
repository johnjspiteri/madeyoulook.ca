(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.questions.view', {
				url: 'view',
				views: {
					'page@': {
						templateUrl: 'public/html/public/questions/view/public.questions.view.html',
						controller: 'QuestionsViewController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.questions.view')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
