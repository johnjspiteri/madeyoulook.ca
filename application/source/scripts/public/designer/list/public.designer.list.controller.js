(function() { "use strict";

	function Internal(designersResolve) {

		var vm = this;

		vm.designers = designersResolve;
		console.log('designers', vm.designers);

	}

	angular
		.module('app.public.designer.list')
		.controller('DesignerListController', Internal);

	Internal.$inject = ['designersResolve'];

})();
