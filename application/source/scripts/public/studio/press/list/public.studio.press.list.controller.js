(function() { "use strict";

	function Internal(articlesResolve) {

		var vm = this;
		vm.articlesResolve = articlesResolve;
	}

	angular
		.module('app.public.studio.press.list')
		.controller('StudioPressListController', Internal);

	Internal.$inject = ['articlesResolve'];

})();
