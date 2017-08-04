'use strict';

/**
 * @ngdoc overview
 * @name ordersAppApp
 * @description
 * # ordersAppApp
 *
 * Main module of the application.
 */
angular
  .module('ordersApp', ['ngAnimate', 'ngTouch', 'ui.router', 'ui.bootstrap'])
  .config(function($stateProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/main.html',
            controller: 'mainCtrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html',
            controller: 'contactCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl'
        });

});
