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
        .factory('productsList', internal);

    internal.$inject = ['$resource'];

})();
