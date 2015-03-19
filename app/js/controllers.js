'use strict';

// setting variable phonecatControllers as a module storing two controllers - first for list, second for item
var phonecatControllers = angular.module('phonecatControllers', []);

// controller for listing items - sends data to View from JSON file
phonecatControllers.controller('PhoneListCtrl',
    [ '$scope', '$http',
    function($scope, $http) {
    $http.get('phones/phones.json').success(function(data){
        $scope.phones = data;
    });

    $scope.orderProperty = 'age';
}]);

// controller for listing items - sends data to View from JSON file
phonecatControllers.controller('PhoneDetailCtrl',
    [ '$scope', '$routeParams',
        function($scope, $routeParams) {
            $scope.phoneId = $routeParams.phoneId;
        }
    ]);
