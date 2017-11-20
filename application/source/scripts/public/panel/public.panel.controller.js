(function() {
	"use strict";

	angular
		.module('app.public')
		.controller('PanelController',['$mdSidenav', '$rootScope', function($mdSidenav, $rootScope) {
			var vm = this;

			vm.close = function () {
				vm.backdrop = false;
				$mdSidenav('panel')
					.close()
					.then(function () {
					});
			};

			$rootScope.$on("open", function () {
				vm.backdrop = true;
				$mdSidenav('panel')
					.open()
					.then(function () {
					});
			});
		}]);
})();