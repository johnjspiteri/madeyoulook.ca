(function() { "use strict";

	function Internal(articlesResolve) {

		var vm = this;
		vm.articlesResolve = articlesResolve;
	}

	angular
		.module('app.public.about.press.list')
		.controller('AboutPressListController', Internal);

	Internal.$inject = ['articlesResolve'];

})();
