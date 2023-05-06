"use strict";

var constants = require('../../helper/constants');
var renderGridLayout = require('../core/renderer/render-grid-layout');

/**
 * @namespace bs-layout
 */

var layout = {};
module.exports = layout;

/**
 * @memberof bs-layout
 * @description 渲染栅格布局
 * @param {View} view
 * @param {function} innerHtmlFn 
 * @param {object} [opts] 
 */
layout.container = function (view, innerHtmlFn, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML_FN] = innerHtmlFn;
  config[constants.TAG_ATTR_CLASS] = 'container';

  renderGridLayout(view, 'div', config, opts);
};

/**
 * @memberof bs-layout
 * @description 渲染栅格布局
 * @param {View} view
 * @param {function} innerHtmlFn 
 * @param {object} [opts] 
 */
layout.containerFluid = function (view, innerHtmlFn, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML_FN] = innerHtmlFn;
  config[constants.TAG_ATTR_CLASS] = 'container-fluid';

  renderGridLayout(view, 'div', config, opts);
};

/**
 * @memberof bs-layout
 * @description 渲染表单布局
 * @param {View} view
 * @param {function} innerHtmlFn 
 * @param {object} [opts] 
 */
layout.form = function (view, innerHtmlFn, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML_FN] = innerHtmlFn;

  renderGridLayout(view, 'form', config, opts);
};

/**
 * @memberof bs-layout
 * @description 渲染表单布局
 * @param {View} view
 * @param {function} innerHtmlFn 
 * @param {object} [opts] 
 */
layout.formInline = function (view, innerHtmlFn, opts) {
  var config = {};
  config[constants.COMPONENT_PARAM_INNER_HTML_FN] = innerHtmlFn;
  config[constants.TAG_ATTR_CLASS] = 'form-inline';

  renderGridLayout(view, 'form', config, opts);
};
