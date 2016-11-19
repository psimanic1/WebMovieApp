/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('SeriesService', function () {
  var factory;

  beforeEach(module('series'));

  beforeEach(inject(function (SeriesService) {
    factory = SeriesService;
  }));

  it('should have someValue be SeriesService', function () {
    expect(factory.someValue).toEqual('SeriesService');
  });

  it('should have someMethod return SeriesService', function () {
    expect(factory.someMethod()).toEqual('SeriesService');
  });
});
