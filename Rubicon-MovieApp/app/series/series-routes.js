(function () {
  'use strict';

  angular
    .module('series')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('series', { 
        url: '/series',
        templateUrl: 'series/series.tpl.html',
        controller: 'SeriesCtrl',
        controllerAs: 'series'
      })
      .state('seriesDetails',{
        url: '/tvshowdetails', 
        params:{
          item: null, 
        
        },
        templateUrl: 'series/series-details.tpl.html',
        controller: 'SeriesDetailsCtrl',
        controllerAs: 'seriesDetails'
      });
  }
}());
