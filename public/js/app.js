(function() {
  'use strict';

  angular
  .module('app' [])
  .config(config);

  config.$inject = [ '$locationProvider', '$httpProvider', '$compileProvider'];

  function config($locationProvider, $httpProvider, $compileProvider) {

  };

  angular
    .module('app')
    .run(run);

  run.$inject = [ '$rootScope', '$location' ];

  function run($rootScope, $location) {

  }
}());
