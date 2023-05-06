"use strict";

var assert = require('assert');
var TagRenderConfig = require('../../../../component/helper/tag/tag-render-config');
var TagRenderer = require('../../../../component/helper/tag/tag-renderer');
var View = require('../../../../lib/view');

describe('TagRenderer', function () {

  describe('#doRender()', function () {
    it('case 1', function () {
      var config = new TagRenderConfig({
        _innerHtml: 'Hello, world!',
        class: 'chat-input-box-default',
        cols: 60,
        rows: 10
      });

      config.extendConfig({
        _appendClass: 'chat-input-box-dark'
      });

      var renderer = new TagRenderer('textarea', config);
      var view = new View();
      renderer.renderToBody(view);

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = '<textarea class="chat-input-box-default' +
        ' chat-input-box-dark" cols="60" rows="10">\nHello, world!\n</textarea>\n';

      assert.equal(actual, expected);
    });

    // innerHtmlFn 不为空的情况
    it('case 2', function () {
      var innerHtmlFn = function (view) {
        view.appendBody('Hello, world!');
      }

      var config = new TagRenderConfig({
        _innerHtmlFn: innerHtmlFn,
        class: 'chat-input-box-default',
        cols: 60,
        rows: 10
      });

      config.extendConfig({
        _appendClass: 'chat-input-box-dark'
      });

      var renderer = new TagRenderer('textarea', config);
      var view = new View();
      renderer.renderToBody(view);

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = '<textarea class="chat-input-box-default' +
        ' chat-input-box-dark" cols="60" rows="10">\nHello, world!\n</textarea>\n';

      assert.equal(actual, expected);
    });

    // 自闭合标签
    it('case 3', function () {
      var config = new TagRenderConfig({
        href: '/app/'
      });

      var renderer = new TagRenderer('base', config);
      var view = new View();
      renderer.renderToHead(view);

      var head = view.getHtmlHead();
      var actual = head.getString();
      var expected = '<base href="/app/"/>\n';

      assert.equal(actual, expected);
    });
  });

});
