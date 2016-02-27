(function() {
  angular
   .module('app')
   .factory('QueryService', QueryService);

   QueryService.$inject = [ '$http', 'LocalStorage' ];

   function QueryService($http, LocalStorage) {

     function query(obj, path, args) {
       var o = obj,
           p = path,
           params = [];

      if (args) {  // getting the variable number of args.
        params = Array.prototype.slice.call(arguments, 3);
      }
     }

     return {
       query: query
     };

     ////////////  function definitions


    /**
     * Load articles from GetPocket API
     * @return {Object} Articles object
     */
    // var request = {
    //   consumer_key: 'xxxx',
    //   access_token: 'xxxx',
    //   sort: 'newest',
    //   count: 5
    // };

    // return $http({
    //   method: 'GET',
    //   url: API.url + 'v3/get',
    //   params: request
    // }).then(function(articles) {
    //   return articles.data;
    // })
    // .catch(function(error) {
    //   return error;
    // });
   }
}());
