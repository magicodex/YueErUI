"use strict";

var assert = require('assert');
var HtmlHead = require('../../../lib/html/html-head');
var StringWriter = require('../../../lib/writer/string-writer');

describe('HtmlHead', function () {

  describe('#appendHead()', function () {
    it('case 1', function () {
      var head = new HtmlHead();
      head.appendHead('<meta charset="utf-8">');

      assert.deepEqual(head._htmlStrings, ['<meta charset="utf-8">']);
    });

    // 参数只能是字符串，不能是 null
    it('case 2', function () {
      var head = new HtmlHead();

      assert.throws(function () {
        head.appendHead(null);
      });
    });

    // 参数只能是字符串，不能是数字
    it('case 3', function () {
      var head = new HtmlHead();

      assert.throws(function () {
        head.appendHead(1);
      });
    });
  });

  describe('#appendHeadFmt()', function () {
    it('case 1', function () {
      var head = new HtmlHead();
      head.appendHeadFmt('<meta charset="{0}">', ['utf-8']);

      assert.deepEqual(head._htmlStrings, ['<meta charset="utf-8">']);
    });

    // 第一个参数只能是字符串，不能是 null
    it('case 2', function () {
      var head = new HtmlHead();

      assert.throws(function () {
        head.appendHeadFmt(null, []);
      });
    });

    // 第一个参数只能是字符串，不能是数字
    it('case 3', function () {
      var head = new HtmlHead();

      assert.throws(function () {
        head.appendHeadFmt(1, []);
      });
    });

    // 第二个参数只能是数组
    it('case 4', function () {
      var head = new HtmlHead();

      assert.throws(function () {
        head.appendHeadFmt('<meta charset="{0}">', 1);
      });
    });
  });

  describe('#renderToString()', function () {
    it('case 1', function () {
      var head = new HtmlHead();
      head.appendHead('<meta charset="utf-8">');

      var writer = new StringWriter();
      head.renderToString(writer);

      assert.equal(writer.getString(), '<meta charset="utf-8">\n');
    });
  });

});
