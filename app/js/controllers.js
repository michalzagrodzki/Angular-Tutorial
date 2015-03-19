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
    [ '$scope', '$routeParams', '$http',
        function($scope, $routeParams, $http) {
            $http.get('/phones' + $routeParams.phoneId + '.json').success(function(data){
                $scope.phone = data;
                $scope.mainImageUrl = data.images[0];
            });

            $scope.setImage = function(imageUrl){
                $scope.mainImageUrl = imageUrl;
            };
        }
    ]);
