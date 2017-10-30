(function() { "use strict";

    function internal($resource) {

        return $resource("/api/product-view/:_id", { _id: "@_id" }, {

            'view': {
                method: 'GET',
                isArray: false,
            }
        });
    }

    angular
        .module('app.public.product.view')
        .factory('productView', internal);

    internal.$inject = ['$resource'];

})();
