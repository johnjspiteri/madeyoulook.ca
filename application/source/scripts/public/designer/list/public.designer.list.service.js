(function() { "use strict";

    function internal($resource) {

        return $resource("/api/designer-list/:_id", { _id: "@_id" }, {
            'get': {
				method: 'GET',
				isArray: true
            }
        });
    }

    angular
        .module('app.public.designer.list')
        .factory('designersList', internal);

    internal.$inject = ['$resource'];

})();
