'use strict';

var LocationMocks = {
  myLocation: {
    "as": "AS18881 Global Village Telecom",
    "city": "Belo Horizonte",
    "country": "Brazil",
    "countryCode": "BR",
    "isp": "Global Village Telecom",
    "lat": -19.9167,
    "lon": -43.9333,
    "org": "Global Village Telecom",
    "query": "177.42.88.132",
    "region": "MG",
    "regionName": "Minas Gerais",
    "status": "success",
    "timezone": "America/Sao_Paulo",
    "zip": ""
  },
  nytimesLocation: {
    "as": "AS40833 The New York Times Company",
    "city": "Seattle",
    "country": "United States",
    "countryCode": "US",
    "isp": "The New York Times Company",
    "lat": 47.6062,
    "lon": -122.3321,
    "org": "The New York Times Company",
    "query": "170.149.172.130",
    "region": "WA",
    "regionName": "Washington",
    "status": "success",
    "timezone": "America/Los_Angeles",
    "zip": "98101"
  }
};

angular.module('geoLocationMock', ['ng'])
  .factory('LocationMocks', function(){
    return(LocationMocks);
  });
