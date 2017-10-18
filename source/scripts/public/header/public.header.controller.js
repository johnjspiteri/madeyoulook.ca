(function() { "use strict";

	angular
		.module('app.public')
		.controller('HeaderController', ['$rootScope' , function($rootScope) {

			var vm = this;
			vm.name = '';

			vm.open = function () {
				$rootScope.$emit("open", {});
			};

		}]);

})();