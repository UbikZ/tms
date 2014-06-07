'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('HeaderCtrl', ['$scope', function ($scope) {
        $scope.header = {name: "header.html", url: "partials/header.html"};
    }])
    .controller('MyCtrl1', ['$scope', function ($scope) {

    }])
    .controller('MyCtrl2', ['$scope', function ($scope) {

    }]);
