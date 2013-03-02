'use strict'

/* Services */

angular.module('aboco.services', ['ngResource']).factory('Audiobook', function($resource) {

  var Audiobook = $resource('http://localhost\\:1302/audiobooks/:audiobookId', {},
    {update: {method: 'PUT'}}
  )

  Audiobook.prototype.update = function(success, error) {
    Audiobook.update({audiobookId: this._id}, this, success, error)
  }

  Audiobook.prototype.delete = function(success, error) {
    Audiobook.remove({audiobookId: this._id}, success, error)
  }

  return Audiobook
})
