(function() { "use strict";

	function Internal($scope, productsResolve) {

		var vm = this;
		vm.compact = false;
		vm.products = productsResolve;

		vm.toggle = function() {
			vm.compact = !vm.compact;
		};

		vm.sliderRanges = {
			price: {
				min: 0,
				max: 10000
			}
		};
		vm.sliderSettings = {
			price: {
				min:  0,
				max:  10000,
				step: 100
			}
		};

		$scope.$watch(function () {
			vm.filteredproducts = vm.products.slice(0, vm.products.length);
		});

		vm.search = {
			category: [
				{ title: 'Bracelet', types: ['Bangles', 'Cuff'] },
				{ title: 'Necklace', types: ['Pendant', 'Choker', 'Lariat'] },
				{ title: 'Ring', types: ['Sterling Silver', 'Costume'] },
				{ title: 'Earring', types: ['Studs', 'Drops', 'Hoops'] },
				{ title: 'Broache', types: [] },
				{ title: 'Cufflink', types: ['Sterling Silver', 'Costume'] },
				{ title: 'Hair Piece', types: [] }
			],
			material: [ "Sterling Silver", "Yellow Gold Plated", "Yellow Gold", "Rose Gold", "White Gold", "Fabric", "Rubber", "Brass", "Plexi","Leather", "Wood", "Fiber", "Plastic", "Alternative", "Glass"]
		};

	}

	angular
		.module('app.public.product')
		.controller('ProductListController', Internal);

	Internal.$inject = ['$scope', 'productsResolve'];

})();
