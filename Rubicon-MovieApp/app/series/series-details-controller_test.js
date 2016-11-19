/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('SeriesDetailsCtrl', function () {
  var ctrl;

  beforeEach(module('series'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('SeriesDetailsCtrl');
  }));

  it('should have ctrlName as SeriesDetailsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('SeriesDetailsCtrl');
  });
});
