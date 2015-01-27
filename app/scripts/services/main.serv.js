angular.module('geoLocationApp')
  .factory('IpApi', ['$resource', function($resource){
    return $resource('http://ip-api.com/json/:host', {});
  }]);
