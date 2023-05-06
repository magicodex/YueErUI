"use strict";

var constants = require('../../../helper/constants');
var renderTagWithExpression = require('../../core/renderer/render-tag-with-expression');

/**
 * @namespace bs-button
 */

var button = {};
module.exports = button;


/**
 * @memberof bs-button
 * @description 渲染按钮
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} innerHtml 
 * @param {object} [opts] 
 */
button.btnPrimary = function (view, expression, innerHtml, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML] = innerHtml;
  config[constants.TAG_ATTR_CLASS] = 'btn btn-primary';

  renderTagWithExpression(view, 'button', expression, config, opts);
};

/**
 * @memberof bs-button
 * @description 渲染按钮
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} innerHtml 
 * @param {object} [opts] 
 */
button.btnSecondary = function (view, expression, innerHtml, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML] = innerHtml;
  config[constants.TAG_ATTR_CLASS] = 'btn btn-secondary';

  renderTagWithExpression(view, 'button', expression, config, opts);
};

/**
 * @memberof bs-button
 * @description 渲染按钮
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} innerHtml 
 * @param {object} [opts] 
 */
button.btnSuccess = function (view, expression, innerHtml, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML] = innerHtml;
  config[constants.TAG_ATTR_CLASS] = 'btn btn-success';

  renderTagWithExpression(view, 'button', expression, config, opts);
};

/**
 * @memberof bs-button
 * @description 渲染按钮
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} innerHtml 
 * @param {object} [opts] 
 */
button.btnDanger = function (view, expression, innerHtml, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML] = innerHtml;
  config[constants.TAG_ATTR_CLASS] = 'btn btn-danger';

  renderTagWithExpression(view, 'button', expression, config, opts);
};

/**
 * @memberof bs-button
 * @description 渲染按钮
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} innerHtml 
 * @param {object} [opts] 
 */
button.btnWarning = function (view, expression, innerHtml, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML] = innerHtml;
  config[constants.TAG_ATTR_CLASS] = 'btn btn-warning';

  renderTagWithExpression(view, 'button', expression, config, opts);
};

/**
 * @memberof bs-button
 * @description 渲染按钮
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} innerHtml 
 * @param {object} [opts] 
 */
button.btnInfo = function (view, expression, innerHtml, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML] = innerHtml;
  config[constants.TAG_ATTR_CLASS] = 'btn btn-info';

  renderTagWithExpression(view, 'button', expression, config, opts);
};

/**
 * @memberof bs-button
 * @description 渲染按钮
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} innerHtml 
 * @param {object} [opts] 
 */
button.btnLight = function (view, expression, innerHtml, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML] = innerHtml;
  config[constants.TAG_ATTR_CLASS] = 'btn btn-light';

  renderTagWithExpression(view, 'button', expression, config, opts);
};

/**
 * @memberof bs-button
 * @description 渲染按钮
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} innerHtml 
 * @param {object} [opts] 
 */
button.btnDark = function (view, expression, innerHtml, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML] = innerHtml;
  config[constants.TAG_ATTR_CLASS] = 'btn btn-dark';

  renderTagWithExpression(view, 'button', expression, config, opts);
};

/**
 * @memberof bs-button
 * @description 渲染按钮
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} innerHtml 
 * @param {object} [opts] 
 */
button.btnLink = function (view, expression, innerHtml, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML] = innerHtml;
  config[constants.TAG_ATTR_CLASS] = 'btn btn-link';

  renderTagWithExpression(view, 'button', expression, config, opts);
};

/**
 * @memberof bs-button
 * @description 渲染提交按钮
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} innerHtml 
 * @param {object} [opts] 
 */
button.submitBtnPrimary = function (view, expression, innerHtml, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML] = innerHtml;
  config['type'] = 'submit';
  config[constants.TAG_ATTR_CLASS] = 'btn btn-primary';

  renderTagWithExpression(view, 'button', expression, config, opts);
};

/**
 * @memberof bs-button
 * @description 渲染重置按钮
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} innerHtml 
 * @param {object} [opts] 
 */
button.resetBtnPrimary = function (view, expression, innerHtml, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML] = innerHtml;
  config['type'] = 'reset';
  config[constants.TAG_ATTR_CLASS] = 'btn btn-primary';

  renderTagWithExpression(view, 'button', expression, config, opts);
};

