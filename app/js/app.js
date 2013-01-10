'use strict'

// Declare app level module which depends on filters, and services
angular.module('aboco-ui', ['aboco.services', 'aboco.filters']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/audiobooks', {templateUrl: 'partials/list.html', controller: ListController})
    $routeProvider.when('/audiobooks/new', {templateUrl: 'partials/add.html', controller: AddController})
    $routeProvider.when('/audiobooks/:audiobookId', {templateUrl: 'partials/details.html', controller: DetailsController})
    $routeProvider.when('/audiobooks/:audiobookId/edit', {templateUrl: 'partials/edit.html', controller: EditController})
    $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: ListController})
    $routeProvider.otherwise({redirectTo: '/audiobooks'})
  }])
