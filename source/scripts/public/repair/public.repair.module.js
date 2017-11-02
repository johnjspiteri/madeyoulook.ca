(function() {
	"use strict";

	angular
		.module('app.public.repair', [
			'app.public.repair.checking',
			'app.public.repair.cleaning',
			// 'app.public.repair.gluing',
			'app.public.repair.refinishing',
			'app.public.repair.repolishing',
			'app.public.repair.sizing',
			'app.public.repair.soldering'
		]);

})();
