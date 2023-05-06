"use strict";

var constants = require('../../../helper/constants');
var renderTextareaTag = require('../../core/renderer/form/render-textarea-tag');

/**
 * @namespace bs-textarea
 */

var textarea = {};
module.exports = textarea;

/**
 * @memberof bs-textarea
 * @description 渲染 textarea 标签
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} [placeholder]
 * @param {object} [opts] 
 */
textarea.defaultTextarea = function (view, expression) {
  var config = {};
  config[constants.TAG_ATTR_CLASS] = 'form-control';
  var newArguments = [view, expression, config];

  if (arguments.length >= 3) {
    newArguments.push(arguments[2]);
  }

  if (arguments.length >= 4) {
    newArguments.push(arguments[3]);
  }

  renderTextareaTag.apply(null, newArguments);
};
