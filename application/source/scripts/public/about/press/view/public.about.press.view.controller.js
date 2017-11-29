(function() { "use strict";

	function Internal(articleResolve) {

		var vm = this;
		vm.article = articleResolve;
		console.log('article:', vm.article);
	}

	angular
		.module('app.public.about.press.view')
		.controller('AboutPressViewController', Internal);

	Internal.$inject = ['articleResolve'];

})();
