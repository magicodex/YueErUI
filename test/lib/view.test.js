"use strict";

var assert = require('assert');
var View = require('../../lib/view');
var StringWriter = require('../../lib/writer/string-writer');


describe('View', function () {

  describe('test', function () {
    it('case 1', function () {
      var view = new View();

      view.appendHead('<title>Welcome</title>');
      view.appendBody('<p>Hello, world!</p>');
      view.addStyle('core.css');
      view.addScript('core.js');

      var writer = new StringWriter();
      view.renderToString(writer);

      var actual = writer.getString();
      var expected = '<!doctype html>\n' +
        '<html lang="zh-CN">\n' +
        '<head>\n' +
        '<meta charset="utf-8">\n' +
        '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
        '<title>Welcome</title>\n' +
        '<link rel="stylesheet" href="core.css">\n' +
        '</head>\n' +
        '<body>\n' +
        '<p>Hello, world!</p>\n' +
        '<script src="core.js"></script>\n' +
        '</body>\n' +
        '</html>';

      assert.equal(actual, expected);
    });
  });

});
