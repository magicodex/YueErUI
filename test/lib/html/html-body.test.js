"use strict";

var assert = require('assert');
var HtmlBody = require('../../../lib/html/html-body');
var StringWriter = require('../../../lib/writer/string-writer');

describe('HtmlBody', function () {

  describe('#appendBody()', function () {
    it('case 1', function () {
      var body = new HtmlBody();
      body.appendBody('<p>Hello, world!</p>');

      assert.deepEqual(body._htmlStrings, ['<p>Hello, world!</p>']);
    });

    // 参数只能是字符串，不能是 null
    it('case 2', function () {
      var body = new HtmlBody();

      assert.throws(function () {
        body.appendBody(null);
      });
    });

    // 参数只能是字符串，不能是数字
    it('case 3', function () {
      var body = new HtmlBody();

      assert.throws(function () {
        body.appendBody(1);
      });
    });
  });

  describe('#appendBodyFmt()', function () {
    it('case 1', function () {
      var body = new HtmlBody();
      body.appendBodyFmt('<p>{0}</p>', ['Hello, world!']);

      assert.deepEqual(body._htmlStrings, ['<p>Hello, world!</p>']);
    });

    // 第一个参数只能是字符串，不能是 null
    it('case 2', function () {
      var body = new HtmlBody();

      assert.throws(function () {
        body.appendBodyFmt(null, []);
      });
    });

    // 第一个参数只能是字符串，不能是数字
    it('case 3', function () {
      var body = new HtmlBody();

      assert.throws(function () {
        body.appendBodyFmt(1, []);
      });
    });

    // 第二个参数只能是数组
    it('case 4', function () {
      var body = new HtmlBody();

      assert.throws(function () {
        body.appendBodyFmt('<p>{0}</p>', 1);
      });
    });
  });

  describe('#renderToString()', function () {
    it('case 1', function () {
      var body = new HtmlBody();
      body.appendBody('<p>Hello, world!</p>');

      var writer = new StringWriter();
      body.renderToString(writer);

      assert.equal(writer.getString(), '<p>Hello, world!</p>\n');
    });
  });

});
