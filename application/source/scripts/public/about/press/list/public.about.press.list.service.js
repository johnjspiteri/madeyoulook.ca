(function() { "use strict";

    function internal($resource) {

        return $resource("/api/article-list/:_id", { _id: "@_id" }, {
            'get': {
				method: 'GET',
				isArray: true
            }
        });
    }

    angular
        .module('app.public.about.press.list')
        .factory('articlesList', internal);

    internal.$inject = ['$resource'];

})();
