(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name series.factory:SeriesService
   *
   * @description
   *
   */
  angular
    .module('series')
    .factory('SeriesService', SeriesService);

  function SeriesService($http, $q) {
    var SeriesServiceBase = {};
    var link = 'https://api.themoviedb.org/3/tv/top_rated?api_key=31222d65b9844d53a32e532b073a95ae&language=en-US';
    var imgLink = 'https://image.tmdb.org/t/p/w500';
    var fullLink = 'https://api.themoviedb.org/3/tv/popular?api_key=31222d65b9844d53a32e532b073a95ae&language=en-US';
    SeriesServiceBase.getLink = function(){
      return imgLink;
    }
    SeriesServiceBase.getfullList = function()
    {
      var deffered = $q.defer();
      $http.get(fullLink)
      .then(function(response)
      {
        deffered.resolve(response);
      })
      .catch(function(err){
        console.log(err);
      })
      return deffered.promise;
    }
    SeriesServiceBase.getSeries = function(){
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
    return SeriesServiceBase;
  }
}());
