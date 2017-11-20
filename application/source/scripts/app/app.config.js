(function() { 'use strict';

	function internal($locationProvider, $urlRouterProvider) {

		$locationProvider.html5Mode(true);

		$urlRouterProvider.rule(function($injector, $location) {
			var path = $location.path(),
			hasTrailingSlash = path[path.length-1] === '/';
			if(!hasTrailingSlash) {
				return path + '/';
			}
		});

		// $urlRouterProvider.otherwise("/404/");

	}

	angular
		.module('app')
		.config(internal);

	internal.$inject = ['$locationProvider', '$urlRouterProvider'];

})();
