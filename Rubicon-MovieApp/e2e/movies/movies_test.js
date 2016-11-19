/* global describe, beforeEach, it, browser, expect */
'use strict';

var MoviesPagePo = require('./movies.po');

describe('Movies page', function () {
  var moviesPage;

  beforeEach(function () {
    moviesPage = new MoviesPagePo();
    browser.get('/#/movies');
  });

  it('should say MoviesCtrl', function () {
    expect(moviesPage.heading.getText()).toEqual('movies');
    expect(moviesPage.text.getText()).toEqual('MoviesCtrl');
  });
});
