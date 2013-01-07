'use strict';

/* Controllers */

function ListController($scope, DataService) {
  $scope.audiobooks = DataService.query();
}
// ListController.$inject = [];


function DetailsController($scope, $routeParams, DataService) {
  $scope.audiobook = DataService.get({audiobookId: $routeParams.audiobookId}, function(audiobook) {
    // ...
  });
}
// DetailsController.$inject = [];
