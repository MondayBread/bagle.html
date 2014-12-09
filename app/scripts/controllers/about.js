'use strict';

/**
 * @ngdoc function
 * @name bagelSamApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bagelSamApp
 */
angular.module('bagelSamApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
