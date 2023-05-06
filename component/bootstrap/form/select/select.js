"use strict";

var constants = require('../../../helper/constants');
var renderTagWithExpression = require('../../core/renderer/render-tag-with-expression');

/**
 * @namespace bs-select
 */

var select = {};
module.exports = select;


/**
 * @memberof bs-select
 * @description 渲染 select 标签
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {function} innerHtmlFn
 * @param {object} [opts] 
 */
select.defaultSelect = function (view, expression, innerHtmlFn, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML_FN] = innerHtmlFn;
  config[constants.TAG_ATTR_CLASS] = 'form-control';

  renderTagWithExpression(view, 'select', expression, config, opts);
};

/**
 * @memberof bs-select
 * @description 渲染 select 标签
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {function} innerHtmlFn
 * @param {object} [opts] 
 */
select.customSelect = function (view, expression, innerHtmlFn, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML_FN] = innerHtmlFn;
  config[constants.TAG_ATTR_CLASS] = 'custom-select';

  renderTagWithExpression(view, 'select', expression, config, opts);
};

