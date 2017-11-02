(function() { "use strict";

	function Internal($state) {

		var vm = this;
		$state.go('app.public.studio.about');

	}

	angular
		.module('app.public.studio')
		.controller('StudioController', Internal);

	Internal.$inject = ['$state'];

})();
