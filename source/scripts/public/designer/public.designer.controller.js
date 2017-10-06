(function() { "use strict";

	function Internal() {

		var vm = this;

		vm.designers = [{
			name: ['Justin Test'],
			experience: 2000,
			specialty: ['Engagement Rings']
		},{
			name: ['Mark Test'],
			experience: 2010,
			specialty: ['Necklaces']
		},{
			name: ['John Test'],
			experience: 1990,
			specialty: ['Earrings']
		}]

	}

	angular
		.module('app.public.designer')
		.controller('DesignerController', Internal);

	Internal.$inject = [];

})();
