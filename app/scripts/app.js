'use strict';

/**
 * @ngdoc overview
 * @name bagelSamApp
 * @description
 * # bagelSamApp
 *
 * Main module of the application.
 */
angular
  .module('bagelSamApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main/timeline/timeline.html',
        controller: 'MainCtrl'
      })
      .when('/search', {
        templateUrl: 'views/main/search/search.html',
        controller: 'AboutCtrl'
      })
      .when('/create-card', {
        templateUrl: 'views/popup/create-card/create-card.html',
        controller: 'AboutCtrl'
      })
      .when('/activity', {
        templateUrl: 'views/main/activity/activity.html',
        controller: 'AboutCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/main/profile/profile.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/popup/auth/login/login.html',
        controller: 'AboutCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/popup/auth/signup/signup.html',
        controller: 'AboutCtrl'
      })
      .when('/create-group', {
        templateUrl: 'views/popup/create-group/create-group.html',
        controller: 'AboutCtrl'
      })
      .when('/invite-member', {
        templateUrl: 'views/popup/invite-member/invite-member.html',
        controller: 'AboutCtrl'
      })
      .when('/select-group', {
        templateUrl: 'views/popup/select-group/select-group.html',
        controller: 'AboutCtrl'
      })
      .when('/polling', {
        templateUrl: 'views/popup/polling/polling.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
