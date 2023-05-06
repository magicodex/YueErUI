"use strict";

var assert = require('assert');
var renderTagWithExpression = require('../../../../../component/bootstrap/core/renderer/render-tag-with-expression');
var View = require('../../../../../lib/view');

describe('renderTagWithExpression', function () {

  describe('test', function () {
    it('case 1', function () {
      var view = new View();
      renderTagWithExpression(view, 'button', '#btn1', {
        class: 'btn btn-primary',
        _innerHtml: 'OK'
      });

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = ['<button class="btn btn-primary" id="btn1">', 'OK', '</button>\n'].join('\n');

      assert.equal(actual, expected);
    });
  });

});
