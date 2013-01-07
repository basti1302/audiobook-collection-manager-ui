'use strict';

/* Services */

angular.module('aboco.services', ['ngResource']).
    factory('DataService', function($resource){
  return $resource('audiobooks/:audiobookId.json', {}, {
    query: {method:'GET', params:{audiobookId:'audiobooks'}, isArray:true}
  });
});
