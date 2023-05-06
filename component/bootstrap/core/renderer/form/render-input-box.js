"use strict";

var utils = require('../../../../../lib/utils');
var renderTagWithExpression = require('../render-tag-with-expression');

/**
 * @namespace bs-renderer-renderInputBox
 */

module.exports = renderInputBox;

/**
 * @memberof bs-renderer-renderInputBox
 * @description 渲染输入框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {object} config
 * @param {string} [placeholder]
 * @param {object} [opts] 
 */
function renderInputBox(view, expression, config) {
  if (utils.isNullOrUndefined(view)) {
    throw new Error('argument#0 "view" is null/undefined');
  }

  if (utils.isNullOrUndefined(config)) {
    throw new Error('argument#2 "config" is null/undefined');
  }

  var placeholder;
  var opts;

  // 解析动态参数
  if (arguments.length >= 5) {
    placeholder = arguments[3];
    opts = arguments[4];
  } else if (arguments.length >= 4) {
    var arg = arguments[3];

    if (utils.isObject(arg)) {
      opts = arg;
    } else {
      placeholder = arg;
    }
  }

  config = utils.concatObjects([config]);

  if (!utils.isNullOrUndefined(placeholder)) {
    config['placeholder'] = placeholder;
  }

  // 渲染标签
  renderTagWithExpression(view, 'input', expression, config, opts);
}

