"use strict";

var assert = require('assert');
var br = require('../../../../component/html/functions/br');
var View = require('../../../../lib/view');

describe('br', function () {

  describe('test', function () {
    it('case 1', function () {
      var view = new View();
      br(view);

      var body = view.getHtmlBody();
      var actual = body.getString();
      assert.equal(actual, '<br>\n');
    });

    // brNumber 参数有值
    it('case 2', function () {
      var view = new View();
      br(view, 2);

      var body = view.getHtmlBody();
      var actual = body.getString();
      assert.deepEqual(actual, '<br>\n<br>\n');
    });
  });

});
