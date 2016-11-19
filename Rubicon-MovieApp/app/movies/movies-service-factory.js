(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name movies.factory:MoviesService
   *
   * @description
   *
   */
  angular
    .module('movies')
    .factory('MoviesService', MoviesService);

  function MoviesService($http, $q) {
    var MoviesServiceBase = {};
    var link = 'https://api.themoviedb.org/3/movie/top_rated?api_key=31222d65b9844d53a32e532b073a95ae&language=en-US';
    var imgLink = 'https://image.tmdb.org/t/p/w500';
    var fulllink =' https://api.themoviedb.org/3/movie/popular?api_key=31222d65b9844d53a32e532b073a95ae&language=en-US';
    MoviesServiceBase.getLink = function(){
      return imgLink;
    }
    MoviesServiceBase.getfulllist = function()
    {
      var deffered = $q.defer();
      $http.get(fulllink)
      .then(function(response)
      {
        deffered.resolve(response);
      })
      .catch(function(err){
        console.log(err);
      })
      return deffered.promise;
    }
    MoviesServiceBase.getMovies = function(){
      var deffered = $q.defer();
      $http.get(link)
      .then(function(response){
        deffered.resolve(response);
      }
      )
      .catch(function(err){
        console.log(err);
      })
      return deffered.promise;
    }
    return MoviesServiceBase;
  }
}());
