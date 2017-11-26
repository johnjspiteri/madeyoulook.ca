(function() { "use strict";

	angular
		.module('app.public')
		.controller('PanelController',['$mdSidenav', '$rootScope', function($mdSidenav, $rootScope) {
			var vm = this;

			vm.state = {
				contact: false,
				custom: false,
				designers: false,
				engagement: false,
				home: false,
				jewellery: false,
				repairs: false,
				services: false,
				studio: false,
				wedding: false,
			}

			function clear() {
				for(var key in vm.state) {
					vm.state[key] = false;
				}
			}

			vm.activate = function(state) {
				clear();
				vm.state[state] = true;
			};

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