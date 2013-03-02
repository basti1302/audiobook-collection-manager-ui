'use strict'

/* Controllers */

function ListController($scope, Audiobook) {
  var refreshView = function() {
    $scope.audiobooks = Audiobook.query()
  }

  refreshView()
  $scope.sortAttribute = "title"
  $scope.sortDescending = false
  $scope.getOrderBy = function() {
    return ($scope.sortDescending ? '-' : '') + $scope.sortAttribute
  }
  $scope.setOrderBy = function(attribute) {
    if ($scope.sortAttribute == attribute) {
      $scope.sortDescending = !$scope.sortDescending
    } else {
      $scope.sortDescending = false
    }
    $scope.sortAttribute = attribute
  }
  $scope.getOrderStyleClass = function(attribute) {
    if ($scope.sortAttribute == attribute && $scope.sortDescending) {
        return "icon-arrow-up"
    } else if ($scope.sortAttribute == attribute && !$scope.sortDescending) {
        return "icon-arrow-down"
    }
  }
  $scope.delete = function(audiobook) {
    console.log("about to remove " + audiobook._id)
    Audiobook.remove({audiobookId: audiobook._id},
      function() {
        console.log("successfully deleted " + audiobook._id)

        // we need to update model in AngularJS as well
        $scope.audiobooks.forEach(function(element, index, array) {
          if (element._id == audiobook._id) {
            delete array[index]
          }
        })
        // alternatively we could call refreshView() (but this would make the whole table flicker)
      },
      function() {
        console.log("could not delete " + audiobook._id)
      }
    )
  }
}
// ListController.$inject = []

function DetailsController($scope,  $location, $routeParams, Audiobook) {
  $scope.audiobook = new Audiobook.get({audiobookId: $routeParams.audiobookId})
  $scope.delete = function() {
    console.log("about to remove " + $scope.audiobook._id)
    $scope.audiobook.delete(
      function() {
        console.log("successfully deleted " + $scope.audiobook._id)
        $location.path('/list')
      },
      function() {
        console.log("could not delete " + $scope.audiobook._id)
      }
    )
  }
}
// DetailsController.$inject = []

function AddController($scope, $location, Audiobook) {
  $scope.audiobook = {author: {}, voice_artist: {}}
  $scope.create = function() {
    Audiobook.save($scope.audiobook)
    console.log("successfully created new audiobook")
    $location.path('/audiobooks')
  }
}
// AddController.$inject = []

function EditController($scope, $location, $routeParams, Audiobook) {
  $scope.audiobook = new Audiobook.get({audiobookId: $routeParams.audiobookId})
  $scope.update= function() {
    console.log("about to update " + $scope.audiobook._id)
    $scope.audiobook.update(
      function() {
        console.log("successfully updated " + $scope.audiobook._id)
        $location.path("/audiobooks/" + $scope.audiobook._id)
      },
      function() {
        console.log("could not update " + $scope.audiobook._id)
      }
    )
  }
}
// EditController.$inject = []
