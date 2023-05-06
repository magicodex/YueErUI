"use strict";

var assert = require('assert');
var title = require('../../../../component/html/functions/title');
var View = require('../../../../lib/view');

describe('title', function () {

  describe('test', function () {
    it('case 1', function () {
      var view = new View();
      title(view, 'Hello, world!');

      var head = view.getHtmlHead();
      var actual = head.getString();
      assert.equal(actual, '<title>Hello, world!</title>\n');
    });
  });

});
