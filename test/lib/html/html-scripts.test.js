"use strict";

var assert = require('assert');
var HtmlScripts = require('../../../lib/html/html-scripts');
var StringWriter = require('../../../lib/writer/string-writer');


describe('HtmlScripts', function () {

  describe('#addScript()', function () {
    it('case 1', function () {
      var scripts = new HtmlScripts();
      scripts.addScript('core.js');

      assert.deepEqual(scripts._htmlStrings, ['<script src="core.js"></script>']);
      assert.deepEqual(scripts._urlIndexes['core.js'], '<script src="core.js"></script>');
    });
  });

  describe('#addScriptFmt()', function () {
    it('case 1', function () {
      var scripts = new HtmlScripts();
      scripts.addScriptFmt('<script src="{0}">\n</script>', 'core.js');

      assert.deepEqual(scripts._htmlStrings, ['<script src="core.js">\n</script>']);
      assert.deepEqual(scripts._urlIndexes['core.js'], '<script src="core.js">\n</script>');
    });

    it('case 2', function () {
      var opts = {
        urlPrefix: '/static/',
        excludeUrls: ['common.js'],
        urlRewriter: (url) => {
          return url.substring(0, url.length - 3) + '.min.js';
        }
      };

      var scripts = new HtmlScripts(opts);
      scripts.addScriptFmt('<script src="{0}">\n</script>', 'core.js');
      // 该 URL 在排除名单里，所以不会添加成功
      scripts.addScriptFmt('<script src="{0}">\n</script>', 'common.js');

      assert.deepEqual(scripts._htmlStrings, ['<script src="/static/core.min.js">\n</script>']);
      assert.equal(scripts._urlIndexes['core.js'], '<script src="/static/core.min.js">\n</script>');
    });
  });

  describe('#renderToString()', function () {
    it('case 1', function () {
      var scripts = new HtmlScripts();
      scripts.addScript('core.js');

      var writer = new StringWriter();
      scripts.renderToString(writer);

      assert.equal(writer.getString(), '<script src="core.js"></script>\n');
    });
  });

});
