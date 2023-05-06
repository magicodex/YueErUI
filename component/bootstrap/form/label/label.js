"use strict";

var constants = require('../../../helper/constants');
var renderLabelTag = require('../../core/renderer/form/render-label-tag');
/**
 * @namespace bs-label
 */

var label = {};
module.exports = label;

/**
 * @memberof bs-label
 * @description 渲染 label 标签
 * @param {View} view
 * @param {string} innerHtml 
 * @param {string} [labelFor]
 * @param {object} [opts] 
 */
label.defaultLabel = function (view, innerHtml) {
  var newArguments = [view, innerHtml, {}];

  if (arguments.length >= 3) {
    newArguments.push(arguments[2]);
  }

  if (arguments.length >= 4) {
    newArguments.push(arguments[3]);
  }

  renderLabelTag.apply(null, newArguments);
};

/**
 * @memberof bs-label
 * @description 渲染 label 标签
 * @param {View} view
 * @param {string} innerHtml 
 * @param {string} [labelFor]
 * @param {object} [opts] 
 */
label.formCheckLabel = function (view, innerHtml) {
  var config = {};
  config[constants.TAG_ATTR_CLASS] = 'form-check-label';
  var newArguments = [view, innerHtml, config];

  if (arguments.length >= 3) {
    newArguments.push(arguments[2]);
  }

  if (arguments.length >= 4) {
    newArguments.push(arguments[3]);
  }

  renderLabelTag.apply(null, newArguments);
};

/**
 * @memberof bs-label
 * @description 渲染 label 标签
 * @param {View} view
 * @param {string} innerHtml 
 * @param {string} [labelFor]
 * @param {object} [opts] 
 */
label.customControlLabel = function (view, innerHtml) {
  var config = {};
  config[constants.TAG_ATTR_CLASS] = 'custom-control-label';
  var newArguments = [view, innerHtml, config];

  if (arguments.length >= 3) {
    newArguments.push(arguments[2]);
  }

  if (arguments.length >= 4) {
    newArguments.push(arguments[3]);
  }

  renderLabelTag.apply(null, newArguments);
};

/**
 * @memberof bs-label
 * @description 渲染 label 标签
 * @param {View} view
 * @param {string} innerHtml 
 * @param {string} [labelFor]
 * @param {object} [opts] 
 */
label.customFileLabel = function (view, innerHtml) {
  var config = {};
  config[constants.TAG_ATTR_CLASS] = 'custom-file-label';
  var newArguments = [view, innerHtml, config];

  if (arguments.length >= 3) {
    newArguments.push(arguments[2]);
  }

  if (arguments.length >= 4) {
    newArguments.push(arguments[3]);
  }

  renderLabelTag.apply(null, newArguments);
};

/**
 * @memberof bs-label
 * @description 渲染 label 标签
 * @param {View} view
 * @param {string} innerHtml 
 * @param {string} [labelFor]
 * @param {object} [opts] 
 */
label.srOnly = function (view, innerHtml) {
  var config = {};
  config[constants.TAG_ATTR_CLASS] = 'sr-only';
  var newArguments = [view, innerHtml, config];

  if (arguments.length >= 3) {
    newArguments.push(arguments[2]);
  }

  if (arguments.length >= 4) {
    newArguments.push(arguments[3]);
  }

  renderLabelTag.apply(null, newArguments);
};

