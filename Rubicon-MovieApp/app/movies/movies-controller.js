(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name movies.controller:MoviesCtrl
   *
   * @description
   *
   */
  angular
    .module('movies')
    .controller('MoviesCtrl', MoviesCtrl);

  function MoviesCtrl($state,$localStorage,MoviesService) {
    var vm = this;
    vm.ctrlName = 'MoviesCtrl';
   
   if($localStorage.tempSearchKey)
      vm.search = $localStorage.tempSearchKey;

    vm.imgLink = ''
    function init(){
      getMovies();
      getfulllist();
  }
    
    function getfulllist()
    {
      MoviesService.getfulllist()
      .then(function(response){
        vm.filmovi = response.data.results;
      })
    }
    function getMovies(){
      vm.imgLink = MoviesService.getLink();
       MoviesService.getMovies()
       .then(function(response){
         vm.movies = response.data.results;
       })
    }
    vm.goToDetails = function(movie){
     $localStorage.tempSearchKey =vm.search;
     $state.go('moviesDetails',{item: movie})

    }
    $localStorage.$reset();
    init();
  }
}());
