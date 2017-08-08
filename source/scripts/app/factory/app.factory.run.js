(function () { 'use strict';

	angular
		.module('app')
		.factory('runFactory', ['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {

			var factory = {};

			factory.init = function() {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
				// $state.go('app.private.create');
			};

			return factory;
		}]);

})();
