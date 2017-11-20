(function() { "use strict";

	function internal($stateProvider) {

		$stateProvider
			.state("app.public", {
				abstract: true,
				url: "/",
				views: {
					"panel@": {
						templateUrl: "public/html/public/panel/public.panel.html",
						controller: "PanelController",
					    controllerAs: "vm"
					},
					"header@": {
						templateUrl: "/public/html/public/header/public.header.html",
						controller: "HeaderController",
						controllerAs: "vm"
					},
					"footer@": {
						templateUrl: "public/html/public/footer/public.footer.html",
						controller: "FooterController",
					    controllerAs: "vm"
					}
				}
			});
	}

	angular
		.module("app.public")
		.config(internal);

	internal.$inject = ["$stateProvider"];

})();
