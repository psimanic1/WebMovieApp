(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name series.controller:SeriesDetailsCtrl
   *
   * @description
   *
   */
  angular
    .module('series')
    .controller('SeriesDetailsCtrl', SeriesDetailsCtrl);

  function SeriesDetailsCtrl($state, SeriesService) {
    var vm = this;
    vm.ctrlName = 'SeriesDetailsCtrl';
    vm.detalji = $state.params.item; 
  }
}());
