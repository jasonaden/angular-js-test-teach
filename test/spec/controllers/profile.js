'use strict';

describe('Controller: ProfileController', function () {

  // load the controller's module
  beforeEach(module('testTeachApp'));

  var ProfileController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfileController = $controller('ProfileController', {
      $scope: scope
    });
  }));

  it('should be defined', function () {
    expect(ProfileController).toBeDefined();
  });
});
