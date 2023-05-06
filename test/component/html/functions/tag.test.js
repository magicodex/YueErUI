"use strict";

var assert = require('assert');
var tag = require('../../../../component/html/functions/tag');
var View = require('../../../../lib/view');

describe('tag', function () {

  describe('test', function () {
    it('case 1', function () {
      var view = new View();
      tag(view, 'h1', 'Hello, world!');

      var body = view.getHtmlBody();
      var actual = body.getString();
      assert.equal(actual, '<h1>\nHello, world!\n</h1>\n');
    });

    // opts 参数有值的情况
    it('case 2', function () {
      var view = new View();
      tag(view, 'link', {
        rel: 'stylesheet',
        href: 'style.css'
      });

      var head = view.getHtmlHead();
      var actual = head.getString();
      assert.equal(actual, '<link rel="stylesheet" href="style.css"/>\n');
    });
  });

});
