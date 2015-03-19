'use strict';

// setting variable phonecatApp as a module
var phonecatApp = angular.module('phonecatApp', []);

// controller for module - sends data to View from JSON file
phonecatApp.controller('PhoneListCtrl', [ '$scope', '$http', function($scope, $http) {
    $http.get('phones/phones.json').success(function(data){
        $scope.phones = data.splice( 0, 10 );
    });

    $scope.orderProperty = 'age';
}]);
