"use strict";

var assert = require('assert');
var StringWriter = require('../../../lib/writer/string-writer');

describe('StringWriter', function () {

  describe('#append()', function () {
    it('case 1', function () {
      var writer = new StringWriter();
      writer.append('Hello, world!');

      assert.deepEqual(writer._strings, ['Hello, world!']);
    });

    // 参数只允许是字符串，不能是 null
    it('case 2', function () {
      var writer = new StringWriter();

      assert.throws(function () {
        writer.append(null);
      });
    });

    // 参数只允许是字符串，不能是数字
    it('case 3', function () {
      var writer = new StringWriter();

      assert.throws(function () {
        writer.append(1);
      });
    });
  });

  describe('#appendLine()', function () {
    it('case 1', function () {
      var writer = new StringWriter();
      writer.appendLine('Hello, world!');

      assert.deepEqual(writer._strings, ['Hello, world!', '\n']);
    });

    // 参数只允许是字符串，不能是 null
    it('case 2', function () {
      var writer = new StringWriter();

      assert.throws(function () {
        writer.appendLine(null);
      });
    });

    // 参数只允许是字符串，不能是数字
    it('case 3', function () {
      var writer = new StringWriter();

      assert.throws(function () {
        writer.appendLine(1);
      });
    });
  });

  describe('#getString()', function () {
    it('case 1', function () {
      var writer = new StringWriter();
      writer.appendLine('Hello, world!');
      writer.append('Hi, world!');

      assert.equal(writer.getString(), 'Hello, world!\nHi, world!');
    });

    it('case 2', function () {
      var writer = new StringWriter();

      assert.equal(writer.getString(), '');
    });
  });

});
