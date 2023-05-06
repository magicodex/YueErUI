"use strict";

var utils = require('../../../lib/utils');
var constants = require('../../helper/constants');
var TagRenderConfig = require('../../helper/tag/tag-render-config');
var TagRenderer = require('../../helper/tag/tag-renderer');
var resolveCustomArguments = require('../../helper/resolver/resolve-custom-arguments');
var resolvedResultConstants = require('../../helper/resolver/resolved-result-constants');

/**
 * @namespace html-tag
 */

module.exports = tag;

tag.privateFn = {
  createTagRenderConfig: createTagRenderConfig
}

// 头部标签
const HEAD_TAGS = ['title', 'base', 'link', 'meta', 'script', 'style'];

/**
 * @memberof html-tag
 * @description 添加标签
 * @param {View} view
 * @param {string} tagName
 * @param {(string|Array)} [expression]
 * @param {(string|function)} [innerHtmlOrInnerHtmlFn]
 * @param {object} [opts]
 */
function tag(view, tagName) {
  if (utils.isNullOrUndefined(view)) {
    throw new Error('argument#0 "view" is null/undefined');
  }

  if (utils.isNullOrUndefined(tagName)) {
    throw new Error('argument#1 "tagName" is null/undefined');
  }

  if (!utils.isString(tagName)) {
    throw new Error('argument#1 "tagName" required string');
  }

  // 解析参数
  var resolvedArgs = resolveCustomArguments(arguments);
  // 根据解析参数创建渲染配置
  var tagRenderConfig = createTagRenderConfig(resolvedArgs);
  // 创建标签渲染器
  var tagRenderer = new TagRenderer(tagName, tagRenderConfig);

  if (HEAD_TAGS.includes(tagName)) {
    // 渲染到 head 标签内
    tagRenderer.renderToHead(view);
  } else {
    // 渲染到 body 标签内
    tagRenderer.renderToBody(view);
  }
}

/**
 * @private
 * @description 创建 TagRenderConfig 对象
 * @param {object} resolvedArgs 
 * @returns {TagRenderConfig}
 */
function createTagRenderConfig(resolvedArgs) {
  var propertyMappings = {}

  // UI 名称
  propertyMappings[resolvedResultConstants.UI_NAME] = constants.TAG_ATTR_UI_NAME;
  // 数据名称
  propertyMappings[resolvedResultConstants.DATA_NAME] = constants.TAG_ATTR_DATA_NAME;
  // 组件类型
  propertyMappings[resolvedResultConstants.COMPONENT_TYPE] = constants.TAG_ATTR_COMPONENT_TYPE;
  // 标签 id 属性
  propertyMappings[resolvedResultConstants.TAG_ID_ATTR] = constants.TAG_ATTR_ID;
  // 标签 name 属性
  propertyMappings[resolvedResultConstants.TAG_NAME_ATTR] = constants.TAG_ATTR_NAME;
  // 标签 class 属性
  propertyMappings[resolvedResultConstants.TAG_CLASS_ATTR] = constants.TAG_ATTR_CLASS;
  // 标签内 HTML 内容
  propertyMappings[resolvedResultConstants.INNER_HTML] = constants.COMPONENT_PARAM_INNER_HTML;
  // 标签内 HTML 内容
  propertyMappings[resolvedResultConstants.INNER_HTML_FN] = constants.COMPONENT_PARAM_INNER_HTML_FN;

  var config = {};
  var options = resolvedArgs[resolvedResultConstants.OPTIONS];

  for (var oldPropertyName in propertyMappings) {
    var propertyValue = resolvedArgs[oldPropertyName];

    if (!utils.isNullOrUndefined(propertyValue)) {
      var newPropertyName = propertyMappings[oldPropertyName];
      config[newPropertyName] = propertyValue;
    }
  }

  var tagRenderConfig = new TagRenderConfig(config);
  if (!utils.isNullOrUndefined(options)) {
    tagRenderConfig.extendConfig(options);
  }

  return tagRenderConfig;
}
