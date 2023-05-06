"use strict";

var constants = require('../../../../helper/constants');
var utils = require('../../../../../lib/utils');
var renderTagWithExpression = require('../render-tag-with-expression');

/**
 * @namespace bs-renderer-renderLabelTag
 */

module.exports = renderLabelTag;

/**
 * @memberof bs-renderer-renderLabelTag
 * @description 渲染 label 标签
 * @param {View} view
 * @param {string} innerHtml 
 * @param {object} config
 * @param {string} [labelFor]
 * @param {object} [opts] 
 */
function renderLabelTag(view, innerHtml, config) {
  if (utils.isNullOrUndefined(view)) {
    throw new Error('argument#0 "view" is null/undefined');
  }

  if (utils.isNullOrUndefined(config)) {
    throw new Error('argument#2 "config" is null/undefined');
  }

  var labelFor;
  var opts;

  // 解析动态参数
  if (arguments.length >= 5) {
    labelFor = arguments[3];
    opts = arguments[4];
  } else if (arguments.length >= 4) {
    var arg = arguments[3];

    if (utils.isObject(arg)) {
      opts = arg;
    } else {
      labelFor = arg;
    }
  }

  config = utils.concatObjects([config]);
  config[constants.COMPONENT_PARAM_INNER_HTML] = innerHtml;

  if (!utils.isNullOrUndefined(labelFor)) {
    config['for'] = labelFor;
  }

  // 渲染标签
  renderTagWithExpression(view, 'label', null, config, opts);
};
