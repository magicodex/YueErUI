"use strict";

var assert = require('assert');
var ViewRenderer = require('../../lib/view-renderer');
var StringWriter = require('../../lib/writer/string-writer');
var View = require('../../lib/view');

describe('ViewRenderer', function () {

  describe('#renderToString()', function () {
    it('case 1', function () {
      var renderer = new ViewRenderer();
      var writer = new StringWriter();
      var view = new View();
      renderer.renderToString(writer, view);

      var actual = writer.getString();
      var expected = '<!doctype html>\n' +
        '<html lang="zh-CN">\n' +
        '<head>\n' +
        '<meta charset="utf-8">\n' +
        '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
        '</head>\n' +
        '<body>\n' +
        '</body>\n' +
        '</html>';

      assert.equal(actual, expected);
    });
  });

});
