'use strict';

// setting variable phonecatControllers as a module storing two controllers - first for list, second for item
var phonecatControllers = angular.module('phonecatControllers', []);

// controller for listing items - sends data to View from JSON file
phonecatControllers.controller('PhoneListCtrl',
    [ '$scope', 'Phone',
    function($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProperty = 'age';
}]);

// controller for listing items - sends data to View from JSON file
phonecatControllers.controller('PhoneDetailCtrl',
    [ '$scope', '$routeParams', 'Phone',
        function($scope, $routeParams, Phone) {
            $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone){
                $scope.mainImageUrl = phone.images[0];
            });

            $scope.setImage = function(imageUrl){
                $scope.mainImageUrl = imageUrl;
            };
        }
    ]);
