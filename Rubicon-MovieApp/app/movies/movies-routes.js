(function () {
  'use strict';

  angular
    .module('movies')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('movies', {
        url: '/movies',
        templateUrl: 'movies/movies.tpl.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .state('moviesDetails',{
        url: '/moviedetails', 
        params:{
          item: null, 
          
        },
        templateUrl: 'movies/movies-details.tpl.html',
        controller: 'MoviesDetailsCtrl',
        controllerAs: 'moviesDetails'
      });
  }
}());
