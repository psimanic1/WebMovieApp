(function () {
  'use strict';

  angular
    .module('rubiconMovieApp')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/movies');
  }
}());
