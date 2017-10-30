(function() { "use strict";

    function internal($resource) {

        return $resource("/api/designer-list/:_id", { _id: "@_id" }, {
            'query': {
				method: 'GET',
				isArray: true
            }
        });
    }

    angular
        .module('app.public.designer')
        .factory('designersList', internal);

    internal.$inject = ['$resource'];

})();
