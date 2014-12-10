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
      .when('/create-card', {
        templateUrl: 'views/popup/create-card/create-card.html',
        controller: 'AboutCtrl'
      })
      .when('/create-group', {
        templateUrl: 'views/popup/create-group/create-group.html',
        controller: 'AboutCtrl'
      })
      .when('/edit-group', {
        templateUrl: 'views/popup/edit-group/edit-group.html',
        controller: 'AboutCtrl'
      })
      .when('/edit-profile', {
        templateUrl: 'views/popup/edit-profile/edit-profile.html',
        controller: 'AboutCtrl'
      })
      .when('/group', {
        templateUrl: 'views/popup/group/group.html',
        controller: 'AboutCtrl'
      })
      .when('/invite-member', {
        templateUrl: 'views/popup/invite-member/invite-member.html',
        controller: 'AboutCtrl'
      })
      .when('/language', {
        templateUrl: 'views/popup/language/language.html',
        controller: 'AboutCtrl'
      })
      .when('/member', {
        templateUrl: 'views/popup/member/member.html',
        controller: 'AboutCtrl'
      })
      .when('/password', {
        templateUrl: 'views/popup/password/password.html',
        controller: 'AboutCtrl'
      })
      .when('/polling', {
        templateUrl: 'views/popup/polling/polling.html',
        controller: 'AboutCtrl'
      })
      .when('/user-profile', {
        templateUrl: 'views/popup/profile/profile.html',
        controller: 'AboutCtrl'
      })
      .when('/select-group', {
        templateUrl: 'views/popup/select-group/select-group.html',
        controller: 'AboutCtrl'
      })
      .when('/select-member', {
        templateUrl: 'views/popup/select-member/select-member.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
