/* global describe, beforeEach, it, browser, expect */
'use strict';

var SeriesPagePo = require('./series.po');

describe('Series page', function () {
  var seriesPage;

  beforeEach(function () {
    seriesPage = new SeriesPagePo();
    browser.get('/#/series');
  });

  it('should say SeriesCtrl', function () {
    expect(seriesPage.heading.getText()).toEqual('series');
    expect(seriesPage.text.getText()).toEqual('SeriesCtrl');
  });
});
