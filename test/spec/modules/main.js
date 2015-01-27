'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('geoLocationApp'));
  beforeEach(angular.mock.module('geoLocationMock'));

  var MainCtrl, scope, $httpBackend;

  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, LocationMocks) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });

    // Function stubs
    spyOn(window, 'alert');
    spyOn(window, 'Date').and.callFake(function(){
      return 'Wed Jan 14 2015 19:15:56 GMT-0200 (BRST)';
    });

    // Http mocks
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', 'http://ip-api.com/json')
      .respond( LocationMocks.myLocation );
    $httpBackend.when('GET', 'http://ip-api.com/json/nytimes.com')
      .respond( LocationMocks.nytimesLocation );
  }));

  it('should be properly initialized', function () {
    expect(scope.fields.length).toBe(7);
    expect(scope.map).toBe(undefined);

    expect(Object.keys(scope.myLocation).length).toBe(2);
    expect(scope.myLocation.query).toBe('0.0.0.0');
    expect(scope.myLocation.options.visible).toBe(false);
    expect(scope.myLocation.options.labelContent).toBe('Me');

    expect(Object.keys(scope.website).length).toBe(1);
    expect(scope.website.options.visible).toBe(false);
    expect(scope.website.options.labelContent).toBe('Website');
    expect(scope.website.options.labelAnchor).toBe('16 0');
  });

  it("should get user's location", function(){
    scope.getMyLocation();
    expect(scope.myLocation.options.visible).toBe(true);

    $httpBackend.flush();
    expect(scope.myLocation.isp).toBe('Global Village Telecom');
    expect(scope.myLocation.query).toBe('177.42.88.132');
    expect(scope.myLocation.country).toBe('Brazil');
    expect(scope.myLocation.regionName).toBe('Minas Gerais');
    expect(scope.myLocation.city).toBe('Belo Horizonte');
    expect(scope.myLocation.timezone).toBe('America/Sao_Paulo');
    expect(scope.myLocation.lat).toBe(-19.9167);
    expect(scope.myLocation.lon).toBe(-43.9333);
    expect(scope.myLocation.coords.latitude).toBe(-19.9167);
    expect(scope.myLocation.coords.longitude).toBe(-43.9333);
    expect(scope.lastRequestedDate).toBe('Wed Jan 14 2015 19:15:56 GMT-0200 (BRST)');
  });

  it('should contain proper help informartion', function(){
    scope.getMyLocation();
    $httpBackend.flush();

    scope.help('IP');
    expect(window.alert)
      .toHaveBeenCalledWith('This is your IP from ISP Global Village Telecom at Wed Jan 14 2015 19:15:56 GMT-0200 (BRST)');
  });

  it("should reset user's location", function(){
    scope.getMyLocation();
    $httpBackend.flush();

    scope.resetMyLocation();
    expect(Object.keys(scope.myLocation).length).toBe(2);
    expect(scope.myLocation.query).toBe('0.0.0.0');
    expect(scope.myLocation.options.visible).toBe(false);
    expect(scope.myLocation.options.labelContent).toBe('Me');
  });

  it('should accept valid website domains', function(){
    var validDomains = ['www.nytimes.com', 'nytimes.com', 'g1.com.br', 'www.g1.com.br'];
    var invalidDomains = ['http://nytimes.com', 'nytimes.com/index.html', 'g1', 'g1.com.'];

    validDomains.forEach(function(domain){
      expect(domain.match(scope.hostRegex)).not.toBe(null);
    });

    invalidDomains.forEach(function(domain){
      expect(domain.match(scope.hostRegex)).toBe(null);
    });
  });

  it("should get website's location", function(){
    scope.website.host = 'nytimes.com';
    scope.locateWebsite();

    $httpBackend.flush();
    expect(scope.website.coords.latitude).toBe(47.6062);
    expect(scope.website.coords.longitude).toBe(-122.3321);
    expect(scope.website.options.visible).toBe(true);
    expect(scope.map.zoom).toBe(1);
    expect(scope.map.center.latitude).toBe(0);
    expect(scope.map.center.longitude).toBe(0);
  });
});
