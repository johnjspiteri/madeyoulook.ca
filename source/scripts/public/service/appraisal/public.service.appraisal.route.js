(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.service.appraisal', {
				url: 'appraisals/',
				views: {
					'content@app.public.service': {
						templateUrl: 'public/html/public/service/appraisal/public.service.appraisal.html',
						controller: 'ServiceAppraisalController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.service.appraisal')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
