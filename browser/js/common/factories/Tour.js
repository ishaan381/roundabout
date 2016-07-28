app.factory('Tour', function ($http) {
    var Tour = {};

    Tour.fetchAll = function () {
        return $http.get('/api/tours')
                    .then(function (response) {
                        return response.data;
                    })
    }

    Tour.queryAll = function (params) {
        return $http.get('/api/tours?' + jQuery.param(params))
                .then(function (response) {
                    return response.data;
                })
    }

    Tour.fetch = function (id) {
        return $http.get('/api/tours/' + id)
                    .then(function (response) {
                        return response.data;
                    })
    }

    Tour.attachGuide = function (tour) {
        return $http.get('/api/users/' + tour.guideId)
             .then(function (response) {
                tour.guide = response.data;
                return tour;
             })
    }

    return Tour;

});
