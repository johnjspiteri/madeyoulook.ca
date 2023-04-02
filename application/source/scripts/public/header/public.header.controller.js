(function() { "use strict";

	angular
		.module('app.public')
		.controller('HeaderController', ['$rootScope' , function($rootScope) {

			var vm = this;

			vm.options = {
				scrollwheel: false,
				mapTypeControl: false,
				streetViewControl: false,
				minZoom: 16,
				maxZoom: 16,
				disableDefaultUI: true,
				draggable: false,
				pan: false
			};

			vm.map = {
				center: {
					latitude: 43.6416835,
					longitude: -79.4318367
				},
				zoom: 16,
				icon: '/img/favicon/favicon.png'
			};

			vm.open = function () {
				$rootScope.$emit("open", {});
			};

		}]);

})();