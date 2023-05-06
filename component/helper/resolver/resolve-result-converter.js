"use strict";

var utils = require('../../../lib/utils');
var constants = require('../constants');
var resolveResultConstants = require('./resolve-result-constants');

/**
 * @namespace helper-resolveResultConverter
 */

var converter = {};
module.exports = converter;

/**
 * @memberof helper-resolveResultConverter
 * @description 转换成标签属性
 * @param {object} resolvedResult 
 * @returns {object}
 */
converter.convertToTagAttributes = function (resolvedResult) {
  if (utils.isNullOrUndefined(resolvedResult)) {
    throw new Error('argument#0 "resolvedResult" is null/undefined');
  }

  var tagAttributes = {};
  var propertyMappings = {};

  // UI 名称
  propertyMappings[resolveResultConstants.UI_NAME] = constants.TAG_ATTR_UI_NAME;
  // 数据名称
  propertyMappings[resolveResultConstants.DATA_NAME] = constants.TAG_ATTR_DATA_NAME;
  // 组件类型
  propertyMappings[resolveResultConstants.COMPONENT_TYPE] = constants.TAG_ATTR_COMPONENT_TYPE;
  // 标签 id 属性
  propertyMappings[resolveResultConstants.TAG_ID_ATTR] = constants.TAG_ATTR_ID;
  // 标签 name 属性
  propertyMappings[resolveResultConstants.TAG_NAME_ATTR] = constants.TAG_ATTR_NAME;
  // 标签 class 属性
  propertyMappings[resolveResultConstants.TAG_CLASS_ATTR] = constants.TAG_ATTR_CLASS;

  for (var oldPropertyName in propertyMappings) {
    var propertyValue = resolvedResult[oldPropertyName];

    if (!utils.isNullOrUndefined(propertyValue)) {
      var newPropertyName = propertyMappings[oldPropertyName];
      tagAttributes[newPropertyName] = propertyValue;
    }
  }

  return tagAttributes;
};
