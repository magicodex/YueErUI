"use strict";

var utils = require('../../../../lib/utils');
var TagRenderConfig = require('../../../helper/tag/tag-render-config');
var TagRenderer = require('../../../helper/tag/tag-renderer');
var resolveCustomExpression = require('../../../helper/resolver/resolve-custom-expression');
var resolveResultConverter = require('../../../helper/resolver/resolve-result-converter');

/**
 * @namespace bs-renderer-renderTagWithExpression
 */

module.exports = renderTagWithExpression;

/**
 * @memberof bs-renderer-renderTagWithExpression
 * @description 渲染标签
 * @param {View} view
 * @param {string} tagName
 * @param {(string|Array)} expression 
 * @param {object} config 
 * @param {object} [opts] 
 */
function renderTagWithExpression(view, tagName, expression, config, opts) {
  if (utils.isNullOrUndefined(view)) {
    throw new Error('argument#0 "view" is null/undefined');
  }

  if (utils.isNullOrUndefined(tagName)) {
    throw new Error('argument#1 "tagName" is null/undefined');
  }

  if (utils.isNullOrUndefined(config)) {
    throw new Error('argument#3 "config" is null/undefined');
  }

  var tagRenderConfig = new TagRenderConfig(config);

  // 自定义表达式
  if (!utils.isNullOrUndefined(expression)) {
    var resolvedResult = resolveCustomExpression(expression);
    var tagAttributes = resolveResultConverter.convertToTagAttributes(resolvedResult);
    tagRenderConfig.extendConfig(tagAttributes);
  }

  if (!utils.isNullOrUndefined(opts)) {
    tagRenderConfig.extendConfig(opts);
  }

  // 渲染标签
  var tagRenderer = new TagRenderer(tagName, tagRenderConfig);
  tagRenderer.renderToBody(view);
}
