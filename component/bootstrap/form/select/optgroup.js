"use strict";

var constants = require('../../../helper/constants');
var utils = require('../../../../lib/utils');
var renderTagWithExpression = require('../../core/renderer/render-tag-with-expression');

/**
 * @namespace bs-select-optgroup
 */

var optgroup = {};
module.exports = optgroup;


/**
 * @memberof bs-select-optgroup
 * @description 渲染 optgroup 标签
 * @param {View} view
 * @param {string} label
 * @param {function} innerHtmlFn
 * @param {object} [opts] 
 */
optgroup.defaultOptgroup = function (view, label, innerHtmlFn, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML_FN] = innerHtmlFn;

  if (!utils.isNullOrUndefined(label)) {
    config['label'] = label;
  }

  renderTagWithExpression(view, 'optgroup', null, config, opts);
};
