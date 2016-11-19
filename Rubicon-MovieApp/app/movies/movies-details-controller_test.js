/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('MoviesDetailsCtrl', function () {
  var ctrl;

  beforeEach(module('movies'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('MoviesDetailsCtrl');
  }));

  it('should have ctrlName as MoviesDetailsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('MoviesDetailsCtrl');
  });
});
