'use strict'

/* Filters */

angular.module('aboco.filters', []).filter('person', function() {
    return function(person) {
      if (person) {
        if (person.last_name && person.first_name) {
          return person.last_name + ', ' + person.first_name
        } else if (person.last_name) {
          return person.last_name
        } else if (person.first_name) {
          return person.first_name
        } else if (person.first_name) {
          return '?'
        }
      } else {
        return ''
      }
    }
  })
