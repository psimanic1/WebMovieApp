/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('MoviesService', function () {
  var factory;

  beforeEach(module('movies'));

  beforeEach(inject(function (MoviesService) {
    factory = MoviesService;
  }));

  it('should have someValue be MoviesService', function () {
    expect(factory.someValue).toEqual('MoviesService');
  });

  it('should have someMethod return MoviesService', function () {
    expect(factory.someMethod()).toEqual('MoviesService');
  });
});
