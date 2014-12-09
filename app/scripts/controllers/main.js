'use strict';

/**
 * @ngdoc function
 * @name bagelSamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bagelSamApp
 */
angular.module('bagelSamApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
