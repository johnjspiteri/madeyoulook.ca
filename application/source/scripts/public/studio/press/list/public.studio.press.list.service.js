(function() { "use strict";

    function internal($resource) {

        return $resource("/api/article-list/:_id", { _id: "@_id" }, {
            'query': {
				method: 'GET',
				isArray: true
            }
        });
    }

    angular
        .module('app.public.studio.press.list')
        .factory('articlesList', internal);

    internal.$inject = ['$resource'];

})();
