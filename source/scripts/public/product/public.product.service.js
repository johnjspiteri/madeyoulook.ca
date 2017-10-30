(function() { "use strict";

    function internal($resource) {

        return $resource("/api/product-list/:_id", { _id: "@_id" }, {
            'query': {
				method: 'GET',
				isArray: true
            }
        });
    }

    angular
        .module('app.public.product')
        .factory('productList', internal);

    internal.$inject = ['$resource'];

})();
