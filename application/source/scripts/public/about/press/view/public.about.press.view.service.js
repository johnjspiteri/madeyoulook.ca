(function() { "use strict";

    function internal($resource) {

        return $resource("/api/article-view/:clean", {clean: "@clean"}, {
            'get': {
				method: 'GET',
				isArray: false
            }
        });
    }

    angular
        .module('app.public.about.press.view')
        .factory('articleView', internal);

    internal.$inject = ['$resource'];

})();
