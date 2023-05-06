"use strict";

var assert = require('assert');
var HtmlStyles = require('../../../lib/html/html-styles');
var StringWriter = require('../../../lib/writer/string-writer');

describe('HtmlStyles', function () {

  describe('#addStyle()', function () {
    it('case 1', function () {
      var styles = new HtmlStyles();
      styles.addStyle('core.css');

      assert.deepEqual(styles._htmlStrings, ['<link rel="stylesheet" href="core.css">']);
      assert.deepEqual(styles._urlIndexes['core.css'], '<link rel="stylesheet" href="core.css">');
    });
  });

  describe('#addStyleFmt()', function () {
    it('case 1', function () {
      var styles = new HtmlStyles();
      styles.addStyleFmt('<link href="{0}" rel="stylesheet">', 'core.css');

      assert.deepEqual(styles._htmlStrings, ['<link href="core.css" rel="stylesheet">']);
      assert.deepEqual(styles._urlIndexes['core.css'], '<link href="core.css" rel="stylesheet">');
    });

    it('case 2', function () {
      var opts = {
        urlPrefix: '/static/',
        excludeUrls: ['common.css'],
        urlRewriter: (url) => {
          return url.substring(0, url.length - 4) + '.min.css';
        }
      };

      var styles = new HtmlStyles(opts);
      styles.addStyleFmt('<link href="{0}" rel="stylesheet">', 'core.css');
      // 该 URL 在排除名单里，所以不会添加成功
      styles.addStyleFmt('<link href="{0}" rel="stylesheet">', 'common.css');

      assert.deepEqual(styles._htmlStrings, ['<link href="/static/core.min.css" rel="stylesheet">']);
      assert.equal(styles._urlIndexes['core.css'], '<link href="/static/core.min.css" rel="stylesheet">');
    });
  });

  describe('#renderToString()', function () {
    it('case 1', function () {
      var styles = new HtmlStyles();
      styles.addStyle('core.css');

      var writer = new StringWriter();
      styles.renderToString(writer);

      assert.equal(writer.getString(), '<link rel="stylesheet" href="core.css">\n');
    });
  });

});
