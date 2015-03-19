'use strict';

/* App Module */

// initialization of modules
var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers'
]);

// configuration of routes
phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            // route for list of phones
            when('/phones', {
                templateUrl: 'partials/phone-list.html',
                controller: 'PhoneListCtrl'
            }).
            // route for single phone
            when('/phones/"phoneId', {
                templateUrl: 'partials/phone-details.html',
                controller: 'PhoneDetailCtrl'
            }).
            // route for redirecting
            otherwise({
                redirectTo: '/phones'
            });
    }
]);
