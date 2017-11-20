(function() {
	'use strict';

	function Error ($scope) {

	}

	angular
		.module('app.public.error')
		.controller('Error', Error);

	Error.$inject = ['$scope'];

})();