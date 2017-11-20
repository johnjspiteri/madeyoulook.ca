(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state('app.public.borrowing', {
				url: 'jewellery-borrowing/',
				views: {
					'page@': {
						templateUrl: 'public/html/public/borrowing/public.borrowing.html',
						controller: 'BorrowingController',
						controllerAs: 'vm'
					}
				}
			});
	}

	angular
		.module('app.public.borrowing')
		.config(internal);

	internal.$inject = ['$stateProvider'];

})();
