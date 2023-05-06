"use strict";

var constants = require('../../../helper/constants');
var utils = require('../../../../lib/utils');
var renderTagWithExpression = require('../../core/renderer/render-tag-with-expression');

/**
 * @namespace bs-select-option
 */

var option = {};
module.exports = option;


/**
 * @memberof bs-select-option
 * @description 渲染 option 标签
 * @param {View} view
 * @param {string} optionValue
 * @param {string} innerHtml
 * @param {object} [opts] 
 */
option.defaultOption = function (view, optionValue, innerHtml, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML] = innerHtml;

  if (!utils.isNullOrUndefined(optionValue)) {
    config['value'] = optionValue;
  }

  renderTagWithExpression(view, 'option', null, config, opts);
};
