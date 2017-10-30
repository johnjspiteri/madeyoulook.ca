(function() { "use strict";

    function internal($resource) {

        return $resource("/api/designer-view/:_id", { _id: "@_id" }, {

            'view': {
                method: 'GET',
                isArray: false,
            }
        });
    }

    angular
        .module('app.public.designer.view')
        .factory('designerView', internal);

    internal.$inject = ['$resource'];

})();
