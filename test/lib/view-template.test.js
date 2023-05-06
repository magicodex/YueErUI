"use strict";

var assert = require('assert');
var ViewTemplate = require('../../lib/view-template');
var HtmlWriter = require('../../lib/writer/string-writer');
var HtmlStyles = require('../../lib/html/html-styles');
var HtmlScripts = require('../../lib/html/html-scripts');

describe('ViewTemplate', function () {

  describe('test', function () {
    it('case 1', function () {
      var template = new ViewTemplate();
      var writer = new HtmlWriter();

      template.headStart(writer);
      template.headEnd(writer);
      template.bodyStart(writer);
      template.bodyEnd(writer);

      var expected = '<!doctype html>\n' +
        '<html lang="zh-CN">\n' +
        '<head>\n' +
        '<meta charset="utf-8">\n' +
        '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
        '</head>\n' +
        '<body>\n' +
        '</body>\n</html>';

      assert.equal(writer.getString(), expected);
    });

    it('case 2', function () {
      var opts = {
        styleUrls: ['style1.css'],
        scriptUrls: ['script.js']

      };

      var htmlStyles = new HtmlStyles();
      var htmlScripts = new HtmlScripts();
      var template = new ViewTemplate(opts);
      template.stylesStart(htmlStyles);
      template.scriptsStart(htmlScripts);
      template.stylesEnd(htmlStyles);
      template.scriptsEnd(htmlScripts);

      assert.equal(htmlStyles._htmlStrings, '<link rel="stylesheet" href="style1.css">');
      assert.equal(htmlScripts._htmlStrings, '<script src="script.js"></script>');
    });
  });

});
