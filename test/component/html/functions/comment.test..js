"use strict";

var assert = require('assert');
var comment = require('../../../../component/html/functions/comment');
var View = require('../../../../lib/view');

describe('comment', function () {

  describe('test', function () {
    it('case 1', function () {
      var view = new View();
      comment(view, 'Hello, world!');

      var body = view.getHtmlBody();
      var actual = body.getString();
      assert.equal(actual, '<!-- Hello, world! -->\n');
    });
  });

});
