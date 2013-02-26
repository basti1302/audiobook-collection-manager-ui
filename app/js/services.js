'use strict'

/* Services */

angular.module('aboco.services', ['ngResource']).factory('Audiobook', function($resource) {

  var Audiobook = $resource('http://localhost\\:1302/audiobooks/:audiobookId', {},
    {update: {method: 'PUT'}}
  )

  Audiobook.prototype.update = function(success, error) {
    Audiobook.update({audiobookId: this.storra_key}, this, success, error)
  }

  Audiobook.prototype.delete = function(success, error) {
    Audiobook.remove({audiobookId: this.storra_key}, success, error)
  }

  return Audiobook
})
