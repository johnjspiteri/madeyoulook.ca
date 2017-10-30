(function() { "use strict";

	function Internal(designerResolve) {

		var vm = this;
		vm.designer = designerResolve;

	}

	angular
		.module('app.public.designer.view')
		.controller('DesignerViewController', Internal);

	Internal.$inject = ['designerResolve'];

})();
