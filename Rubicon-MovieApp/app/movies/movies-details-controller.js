(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name movies.controller:MoviesDetailsCtrl
   *
   * @description
   *
   */
  angular
    .module('movies')
    .controller('MoviesDetailsCtrl', MoviesDetailsCtrl);

  function MoviesDetailsCtrl($state, MoviesService) {
    var vm = this;
    vm.ctrlName = 'MoviesDetailsCtrl';
   
    vm.detalji = $state.params.item; 
    
     
  }
}());
