'use strict';

/* Controllers */

var tmsControllers = angular.module('tms.controllers', []);

tmsControllers.controller('IncludeCtrl', ['$scope',
    function($scope) {
        $scope.header = {name: "include.html", url: "partials/layout/include.html"};
    }
]);

tmsControllers.controller('HeaderCtrl', ['$scope',
    function($scope) {
        $scope.header = {name: "header.html", url: "partials/layout/header.html"};
    }
]);

tmsControllers.controller('FooterCtrl', ['$scope',
    function($scope) {
        $scope.footer = {name: "footer.html", url: "partials/layout/footer.html"};
    }
]);

tmsControllers.controller('IncludeCtrl', ['$scope',
    function($scope) {
        $scope.footer = {name: "include.html", url: "partials/layout/include.html"};
    }
]);

tmsControllers.controller('MyCtrl1', ['$scope',
    function($scope) {
        // todo : implement
    }
]);

tmsControllers.controller('MyCtrl2', ['$scope',
    function($scope) {
        // todo : implement
    }
]);
