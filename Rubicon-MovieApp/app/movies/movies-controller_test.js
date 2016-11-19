/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('MoviesCtrl', function () {
  var ctrl;

  beforeEach(module('movies'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('MoviesCtrl');
  }));

  it('should have ctrlName as MoviesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('MoviesCtrl');
  });
});
