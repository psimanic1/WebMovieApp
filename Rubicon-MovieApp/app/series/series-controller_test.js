/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('SeriesCtrl', function () {
  var ctrl;

  beforeEach(module('series'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('SeriesCtrl');
  }));

  it('should have ctrlName as SeriesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('SeriesCtrl');
  });
});
