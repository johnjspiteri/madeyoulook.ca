(function() { "use strict";

	function Internal(articlesResolve) {

		var vm = this;
		vm.articlesResolve = articlesResolve;
		console.log('articles', vm.articlesResolve);

	}

	angular
		.module('app.public.studio.land.press.list')
		.controller('StudioPressListController', Internal);

	Internal.$inject = ['articlesResolve'];

})();
