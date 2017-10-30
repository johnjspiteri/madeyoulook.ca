(function() { "use strict";

    function internal($resource) {

        return $resource("/api/designers-list/:_id", { _id: "@_id" }, {
            'query': {
				method: 'GET',
				isArray: true
            }
        });
    }

    angular
        .module('app.public.designer')
        .factory('designerList', internal);

    internal.$inject = ['$resource'];

})();
