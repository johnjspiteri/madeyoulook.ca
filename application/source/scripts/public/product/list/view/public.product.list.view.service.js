(function() { "use strict";

    function internal($resource) {

        return $resource("/api/product-view/:_id", { _id: "@_id" }, {
            'query': {
				method: 'GET',
				isArray: true
            }
        });
    }

    angular
        .module('app.public.product.list.view')
        .factory('productView', internal);

    internal.$inject = ['$resource'];

})();
