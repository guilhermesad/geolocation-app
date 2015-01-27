'use strict';

/**
 * @ngdoc function
 * @name geoLocationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geoLocationApp
 */
angular.module('geoLocationApp')
  .controller('MainCtrl', ['$scope', 'IpApi', function($scope, IpApi){

    $scope.fields = [
      { name: 'query',      displayName: 'IP'        },
      { name: 'country',    displayName: 'Country'   },
      { name: 'regionName', displayName: 'Region'    },
      { name: 'city',       displayName: 'City'      },
      { name: 'timezone',   displayName: 'Time Zone' },
      { name: 'lat',        displayName: 'Latitude'  },
      { name: 'lon',        displayName: 'Longitude' }
    ];

    $scope.myLocation = { 
      query: '0.0.0.0',
      options: {
        visible: false,
        labelContent: 'Me'
      }
    };

    $scope.website = {
      options: {
        visible: false,
        labelContent: 'Website',
        labelAnchor: '16 0'
      }
    };

    $scope.hostRegex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)+([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;

    $scope.getMyLocation = function() {
      $scope.myLocation.options.visible = true;
      IpApi.get(function(data){
        $.extend($scope.myLocation, data);
        $scope.myLocation.coords = { latitude: data.lat, longitude: data.lon };
        $scope.lastRequestedDate = Date();
      });
    };

    $scope.resetMyLocation = function() {
      $scope.myLocation = { 
        query: '0.0.0.0',
        options: {
          visible: false,
          labelContent: 'Me'
        }
      };
    };

    $scope.help = function(fieldDisplayName){
      alert('This is your ' + fieldDisplayName + ' from ISP ' + $scope.myLocation.isp + ' at ' + $scope.lastRequestedDate);
    };

    $scope.locateWebsite = function(){
      IpApi.get({host: $scope.website.host}, function(data){
        $scope.website.coords = { latitude: data.lat, longitude: data.lon };
        if(!$scope.website.options.visible){
          $scope.map = { zoom: 1, center: { latitude: 0, longitude: 0 } };
          $scope.website.options.visible = true;
        };
      });
    };
  }]);
