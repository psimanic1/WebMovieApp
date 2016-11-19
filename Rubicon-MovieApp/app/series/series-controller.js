(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name series.controller:SeriesCtrl
   *
   * @description
   *
   */
  angular
    .module('series')
    .controller('SeriesCtrl', SeriesCtrl);

  function SeriesCtrl($state,$localStorage,SeriesService) {
    var vm = this;
    vm.ctrlName = 'SeriesCtrl';
    
    if($localStorage.tempSearchKey)
      vm.search = $localStorage.tempSearchKey;

    vm.imgLink = ''
    function init(){
      getSeries();
      getfullList();
    }
    function getfullList()
    {
      SeriesService.getfullList()
      .then(function(response){
        vm.serije = response.data.results;
      })
    }
    function getSeries(){
      vm.imgLink = SeriesService.getLink();
       SeriesService.getSeries()
       .then(function(response){
         vm.series = response.data.results;
       })
    }
    vm.goToDetails = function(tvshow){ 
      $localStorage.tempSearchKey =vm.search;
      $state.go('seriesDetails',{item: tvshow}) 

    }
    $localStorage.$reset();
    init();
  }
}());
