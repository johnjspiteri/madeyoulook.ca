(function() {
	'use strict';

	function escKey ($document) {
		return function (scope, element, attrs) {
			$document.bind('keydown keypress', function (event) {
				if(event.which === 27) {
					scope.$apply(function (){
						scope.$eval(attrs.esckey);
					});

					event.preventdefault();
				}
			});
		};
	}

	angular
		.module('app.common')
		.directive('escKey', escKey);

	escKey.$inject = ['$document'];

})();