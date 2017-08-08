(function() { 'use strict';

	function internal($state, runFactory) {
		runFactory.init();
		$state.go('app.public.index');
	}

	angular
		.module('app')
		.run(internal);

	internal.$inject = ['$state', 'runFactory'];
})();