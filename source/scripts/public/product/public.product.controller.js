(function() { "use strict";

	function Internal(productsResolve) {

		var vm = this;

		vm.products = productsResolve;
		console.log('products', vm.products);
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
		}

	}

	angular
		.module('app.public.product')
		.controller('ProductController', Internal);

	Internal.$inject = ['productsResolve'];

})();
