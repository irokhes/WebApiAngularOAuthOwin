'use strict';
app.factory('ordersService', ['$http', function($http) {

    var serviceBase = 'http://localhost:19995/';
    var orderServiceFactory = {};

    var _getOrders = function() {
        return $http.get(serviceBase + 'api/orders').then(function(results) {
            return results;
        });
    };

    orderServiceFactory.getOrders = _getOrders;

    return orderServiceFactory;

}]);