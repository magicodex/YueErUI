"use strict";

var assert = require('assert');
var Grid = require('../../../../component/bootstrap/layout/grid');
var View = require('../../../../lib/view');

describe('Grid', function () {

  describe('#build()', function () {
    // 最外头是 div 标签
    it('case 1', function () {
      var view = new View();
      var grid = new Grid(view);

      grid.build(function () {
        grid.rowNew();
        grid.colNew();
        grid.groupNew();
      });

      var htmlBody = view.getHtmlBody();
      var actual = htmlBody.getString();
      var expected = ['<div class="container">',
        '<div class="row">', '<div class="col">', '<div class="form-group">',
        '</div>', '</div>', '</div>',
        '</div>\n'].join('\n');

      assert.equal(actual, expected);
    });

    // 最外头是 form 标签
    it('case 2', function () {
      var view = new View();
      var grid = new Grid(view, {
        startTag: '<form>',
        endTag: '</form>'
      });

      grid.build(function () {
        grid.rowNew();
        grid.colNew();
        grid.groupNew();
      });

      var htmlBody = view.getHtmlBody();
      var actual = htmlBody.getString();
      var expected = ['<form>',
        '<div class="row">', '<div class="col">', '<div class="form-group">',
        '</div>', '</div>', '</div>',
        '</form>\n'].join('\n');

      assert.equal(actual, expected);
    })
  });

  describe('#getColumnClassNames()', function () {
    it('case 1', function () {
      var func = Grid.privateFn.getColumnClassNames;

      assert.deepEqual(func(1, 2, 6, 12), ['col-sm-12', 'col-md-6', 'col-lg-2', 'col-xl-1']);
    });
  });

});
