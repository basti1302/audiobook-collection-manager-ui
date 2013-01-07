'use strict';

// Declare app level module which depends on filters, and services
angular.module('aboco-ui', ['aboco.services']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/audiobooks', {templateUrl: 'partials/list.html', controller: ListController});
    $routeProvider.when('/audiobooks/:audiobookId', {templateUrl: 'partials/details.html', controller: DetailsController});
    $routeProvider.otherwise({redirectTo: '/audiobooks'});
  }]);
