﻿'use strict';
app.controller('indexController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {
    
    $scope.logOut = function() {
        
    }

    $scope.authentication = authService.authentication;
}]);