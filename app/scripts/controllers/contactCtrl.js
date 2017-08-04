'use strict';

/**
 * @ngdoc function
 * @name ordersAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ordersAppApp
 */
angular.module('ordersApp')
  .controller('contactCtrl', function ($state) {
    $state.go('contact');
  });
