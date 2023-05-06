"use strict";

var utils = require('../../../lib/utils');
var resolveResultConstants = require('./resolve-result-constants');

/**
 * @namespace helper-resolveCustomExpression
 */

module.exports = resolveCustomExpression;

/**
 * @memberof helper-resolveCustomExpression
 * @description 解析自定义表达式
 * @param {(string|Array)} expression
 * @returns {object}
 */
function resolveCustomExpression(expression) {
  if (utils.isNullOrUndefined(expression)) {
    return {};
  }

  var array = (expression instanceof Array)
    ? expression : [expression];
  var result = {};

  for (var index = 0; index < array.length; index++) {
    var item = array[index];

    if (!utils.isString(item)) {
      continue;
    }

    if (item.startsWith('##')) {
      // UI 名称
      if (!(resolveResultConstants.UI_NAME in result)) {
        var value = item.substring(2);
        result[resolveResultConstants.UI_NAME] = value;
      }
    } else if (item.startsWith('$$')) {
      // 数据名称
      if (!(resolveResultConstants.DATA_NAME in result)) {
        var value = item.substring(2);
        result[resolveResultConstants.DATA_NAME] = value;
      }
    } else if (item.startsWith('#')) {
      // 标签 id 属性
      if (!(resolveResultConstants.TAG_ID_ATTR in result)) {
        var value = item.substring(1);
        result[resolveResultConstants.TAG_ID_ATTR] = value;
      }
    } else if (item.startsWith('$')) {
      // 标签 name 属性
      if (!(resolveResultConstants.TAG_NAME_ATTR in result)) {
        var value = item.substring(1);
        result[resolveResultConstants.TAG_NAME_ATTR] = value;
      }
    } else if (item.startsWith('@@')) {
      // 组件类型
      if (!(resolveResultConstants.COMPONENT_TYPE in result)) {
        var value = item.substring(2);
        result[resolveResultConstants.COMPONENT_TYPE] = value;
      }
    } else if (item.startsWith('@')) {
      // 标签 class 属性
      if (!(resolveResultConstants.TAG_CLASS_ATTR in result)) {
        var value = item.substring(1);
        result[resolveResultConstants.TAG_CLASS_ATTR] = value;
      }
    }
  }

  return result;
}
