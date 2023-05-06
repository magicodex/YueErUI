"use strict";

var assert = require('assert');
var button = require('../../../../../component/bootstrap/form/button/button');
var View = require('../../../../../lib/view');

describe('button', function () {

  describe('#btnPrimary()', function () {
    it('case 1', function () {
      var view = new View();
      button.btnPrimary(view, '#btn1', 'OK');

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = ['<button class="btn btn-primary" id="btn1">',
        'OK', '</button>\n'].join('\n');

      assert.equal(actual, expected);
    });
  });

  describe('#submitBtnPrimary()', function () {
    it('case 1', function () {
      var view = new View();
      button.submitBtnPrimary(view, '#btn1', 'OK');

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = ['<button type="submit" class="btn btn-primary" id="btn1">',
        'OK', '</button>\n'].join('\n');

      assert.equal(actual, expected);
    });
  });

  describe('#resetBtnPrimary()', function () {
    it('case 1', function () {
      var view = new View();
      button.resetBtnPrimary(view, '#btn1', 'OK');

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = ['<button type="reset" class="btn btn-primary" id="btn1">',
        'OK', '</button>\n'].join('\n');

      assert.equal(actual, expected);
    });
  });

});
