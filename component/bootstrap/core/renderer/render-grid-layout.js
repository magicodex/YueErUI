
"use strict";

var utils = require('../../../../lib/utils');
var TagRenderConfig = require('../../../helper/tag/tag-render-config');
var Tag = require('../../../helper/tag/tag');
var Grid = require('../../layout/grid');

/**
 * @namespace bs-renderer-renderGridLayout
 */

module.exports = renderGridLayout;

/**
 * @memberof bs-renderer-renderGridLayout
 * @description 渲染布局
 * @param {View} view
 * @param {string} tagName
 * @param {object} config 
 * @param {object} [opts] 
 */
function renderGridLayout(view, tagName, config, opts) {
  if (utils.isNullOrUndefined(view)) {
    throw new Error('argument#0 "view" is null/undefined');
  }

  if (utils.isNullOrUndefined(tagName)) {
    throw new Error('argument#1 "tagName" is null/undefined');
  }

  if (utils.isNullOrUndefined(config)) {
    throw new Error('argument#2 "config" is null/undefined');
  }

  // 标签渲染配置
  var tagRenderConfig = new TagRenderConfig(config);
  if (!utils.isNullOrUndefined(opts)) {
    tagRenderConfig.extendConfig(opts);
  }

  var tagAttributes = tagRenderConfig.getAllTagAttributes();
  var tag = new Tag(tagName, tagAttributes);
  // 获取开始和结束标签
  var startTagString = tag.getStartTagString('>');
  var endTagString = tag.getEndTagString();

  // 创建栅格布局
  var grid = new Grid(view, {
    startTag: startTagString,
    endTag: endTagString
  });

  var innerHtmlFn = tagRenderConfig.getInnerHtmlFn();
  // 渲染布局
  grid.build(innerHtmlFn);
};
