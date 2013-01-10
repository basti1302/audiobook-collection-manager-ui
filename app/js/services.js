'use strict'

/* Services */

angular.module('aboco.services', ['ngResource']).factory('Audiobook', function($resource) {

  var Audiobook = $resource('http://localhost\\:8888/audiobooks/:audiobookId', {},
    {update: {method: 'PUT'}}
  )

  Audiobook.prototype.update = function(success, error) {
    Audiobook.update({audiobookId: this.nstore_key}, this, success, error)
  }

  Audiobook.prototype.delete = function(success, error) {
    Audiobook.remove({audiobookId: this.nstore_key}, success, error)
  }

  return Audiobook
})
