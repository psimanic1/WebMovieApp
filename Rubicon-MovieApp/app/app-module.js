(function () {
  'use strict';

  /* @ngdoc object
   * @name rubiconMovieApp
   * @description
   *
   */
  angular
    .module('rubiconMovieApp', [
      'ngCookies',
      'ngStorage',
      'ui.router',
      'ui.bootstrap',
      'home',
      'movies',
      'series'
    ]);
}());
