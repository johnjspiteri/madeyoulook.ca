(function() { "use strict";

	angular
		.module('app.public.panel')
		.controller('PanelController',['$mdSidenav', '$rootScope', '$state', function($mdSidenav, $rootScope, $state) {
			var vm = this;

			vm.state = {
				contact: false,
				custom: false,
				designer: false,
				engagement: false,
				index: false,
				product: false,
				repair: false,
				service: false,
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
					.then(function () {});
			};

			var state = $state.current.name.split('.');
			console.log('state:', state);
			vm.activate(state[2]);

			$rootScope.$on("open", function () {
				vm.backdrop = true;
				var state = $state.current.name.split('.');
				console.log('state:', state);
				$mdSidenav('panel')
					.open()
					.then(function () {
					});
			});
		}]);
})();