"use strict";

var assert = require('assert');
var renderGridLayout = require('../../../../../component/bootstrap/core/renderer/render-grid-layout');
var View = require('../../../../../lib/view');

describe('renderGridLayout', function () {

  describe('test', function () {
    it('case 1', function () {
      var innerHtmlFn = function (view, grid) {
        view.appendBody('Hello, world!');
      };

      var view = new View();
      renderGridLayout(view, 'div', {
        _innerHtmlFn: innerHtmlFn,
        class: 'container'
      });

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = ['<div class="container">',
        'Hello, world!', '</div>\n'].join('\n');

      assert.equal(actual, expected);
    });
  });

});
