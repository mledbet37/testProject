(function() {
  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = [ 'LocalStorage', 'QueryService' ];

  function MainController(LocalStorage, QueryService) {
    var vm = this;


    /**
    * Load some data
    * @return {object} Returned object
    */
    // QueryService.query('GET', 'posts', {}, {})
    //  .then(function(response) {
    //    self.data = response.data;
    //  });
  })
  }
}());
