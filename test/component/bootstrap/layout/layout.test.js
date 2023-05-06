"use strict";

var assert = require('assert');
var layout = require('../../../../component/bootstrap/layout/layout');
var View = require('../../../../lib/view');

describe('layout', function () {

  describe('#container()', function () {
    it('case 1', function () {
      var view = new View();
      layout.container(view, function (_, grid) {
        grid.groupNew();
        view.appendBody('<label>Example label</label>');
        view.appendBody('<input type="text" class="form-control"/>');
      });

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = ['<div class="container">',
        '<div class="form-group">',
        '<label>Example label</label>',
        '<input type="text" class="form-control"/>',
        '</div>',
        '</div>\n'].join('\n');

      assert.equal(actual, expected);
    });
  });

  describe('#containerFluid()', function () {
    it('case 1', function () {
      var view = new View();
      layout.containerFluid(view, function (_, grid) {
        grid.groupNew();
        view.appendBody('<label>Example label</label>');
        view.appendBody('<input type="text" class="form-control"/>');
      });

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = ['<div class="container-fluid">',
        '<div class="form-group">',
        '<label>Example label</label>',
        '<input type="text" class="form-control"/>',
        '</div>',
        '</div>\n'].join('\n');

      assert.equal(actual, expected);
    });
  });

  describe('#form()', function () {
    it('case 1', function () {
      var view = new View();
      layout.form(view, function (_, grid) {
        grid.groupNew();
        view.appendBody('<label>Example label</label>');
        view.appendBody('<input type="text" class="form-control"/>');
      });

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = ['<form>',
        '<div class="form-group">',
        '<label>Example label</label>',
        '<input type="text" class="form-control"/>',
        '</div>',
        '</form>\n'].join('\n');

      assert.equal(actual, expected);
    });
  });

  describe('#formInline()', function () {
    it('case 1', function () {
      var view = new View();
      layout.formInline(view, function (_, grid) {
        grid.groupNew();
        view.appendBody('<label>Example label</label>');
        view.appendBody('<input type="text" class="form-control"/>');
      });

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = ['<form class="form-inline">',
        '<div class="form-group">',
        '<label>Example label</label>',
        '<input type="text" class="form-control"/>',
        '</div>',
        '</form>\n'].join('\n');

      assert.equal(actual, expected);
    });
  });

});
