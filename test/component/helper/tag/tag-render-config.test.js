"use strict";

var assert = require('assert');
var TagRenderConfig = require('../../../../component/helper/tag/tag-render-config');
var constants = require('../../../../component/helper/constants');

describe('TagRenderConfig', function () {

  describe('#extendConfig()', function () {
    it('case 1', function () {
      var renderConfig = new TagRenderConfig({
        _uiName: 'chatInputBox',
        _dataName: 'chatContent',
        _componentName: 'textareaChatBox',
        _innerHtml: 'Hello, world!',
        class: 'chat-input-box-default',
        cols: 60,
        rows: 10
      });

      renderConfig.extendConfig({
        _appendClass: 'chat-input-box-dark'
      });

      assert.equal(renderConfig.getComponentParam('_uiName'), 'chatInputBox');
      assert.equal(renderConfig.getTagAttribute(constants.TAG_ATTR_DATA_NAME), 'chatContent');
      assert.equal(renderConfig.getTagAttribute('class'), 'chat-input-box-default chat-input-box-dark');
      assert.equal(renderConfig.getInnerHtml(), 'Hello, world!');
    });
  });

  describe('#doUnderlinePrefix()', function () {
    it('case 1', function () {
      var renderConfig = new TagRenderConfig({});
      renderConfig.doUnderlinePrefix('__name', 'XXXX');

      assert.equal(renderConfig.getTagAttribute('_name'), 'XXXX');
    });

    it('case 2', function () {
      var renderConfig = new TagRenderConfig({});
      renderConfig.doUnderlinePrefix('_name', 'XXXX');

      assert.equal(renderConfig.getComponentParam('_name'), 'XXXX');
    });
  });


});
