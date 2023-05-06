"use strict";

var utils = require('../../../lib/utils');
var constants = require('../constants');

module.exports = TagRenderConfig;


/**
 * @class
 * @classdesc 标签渲染配置，定义渲染标签的参数
 * @param {object} [opts] 
 */
function TagRenderConfig(opts) {
  this._componentParameters = {};
  this._tagAttributes = {};
  this._innerHtml = null;
  this._innerHtmlFn = null;

  if (!utils.isNullOrUndefined(opts)) {
    this.extendConfig(opts);
  }
}

/**
 * @description 获取所有的组件参数
 * @returns {object}
 */
TagRenderConfig.prototype.getAllComponentParams = function () {
  return this._componentParameters;
};

/**
 * @description 获取指定的组件参数
 * @param {string} name 
 * @returns {*}
 */
TagRenderConfig.prototype.getComponentParam = function (name) {
  return this._componentParameters[name];
};

/**
 * @description 设置指定的组件参数
 * @param {string} name 
 * @param {*} value 
 */
TagRenderConfig.prototype.setComponentParam = function (name, value) {
  this._componentParameters[name] = value;
};

/**
 * @description 移除指定的组件参数
 * @param {string} name 
 */
TagRenderConfig.prototype.removeComponentParam = function (name) {
  delete this._componentParameters[name];
};

/**
 * @description 获取所有的标签属性
 * @returns {object}
 */
TagRenderConfig.prototype.getAllTagAttributes = function () {
  return this._tagAttributes;
};

/**
 * @description 获取指定的标签属性
 * @param {string} name 
 * @returns {*}
 */
TagRenderConfig.prototype.getTagAttribute = function (name) {
  return this._tagAttributes[name];
};

/**
 * @description 设置指定的标签属性
 * @param {string} name 
 * @param {*} value 
 */
TagRenderConfig.prototype.setTagAttribute = function (name, value) {
  this._tagAttributes[name] = value;
};

/**
 * @description 移除指定的标签属性
 * @param {string} name 
 */
TagRenderConfig.prototype.removeTagAttribute = function (name) {
  delete this._tagAttributes[name];
};

/**
 * @description 获取标签内 HTML 内容
 * @returns {string}
 */
TagRenderConfig.prototype.getInnerHtml = function () {
  return this._innerHtml;
};

/**
 * @description 设置标签内 HTML 内容
 * @param {string} innerHtml 
 */
TagRenderConfig.prototype.setInnerHtml = function (innerHtml) {
  this._innerHtml = innerHtml;
};

/**
 * @description 获取标签内 HTML 内容
 * @returns {function}
 */
TagRenderConfig.prototype.getInnerHtmlFn = function () {
  return this._innerHtmlFn;
};

/**
 * @description 设置标签内 HTML 内容
 * @param {function} innerHtmlFn 
 */
TagRenderConfig.prototype.setInnerHtmlFn = function (innerHtmlFn) {
  this._innerHtmlFn = innerHtmlFn;
};

/**
 * @description 扩展指定配置
 * @param {object} config 
 */
TagRenderConfig.prototype.extendConfig = function (config) {
  if (utils.isNullOrUndefined(config)) {
    throw new Error('argument#0 "config" is null/undefined');
  }

  for (var name in config) {
    var value = config[name];

    if (name.startsWith('_')) {
      // 处理下划线开头的属性
      //
      this.doUnderlinePrefix(name, value);
    } else {
      // 设置标签属性
      //
      this.setTagAttribute(name, value);
    }
  }
};

/**
 * @description 处理符号 _ 开头的配置
 * @param {string} name 
 * @param {*} newValue 
 */
TagRenderConfig.prototype.doUnderlinePrefix = function (name, newValue) {
  if (!utils.isString(name)) {
    throw new Error('argument#0 "name" required string');
  }

  if (!name.startsWith('_')) {
    throw new Error('argument#0 "name" required start with "_"');
  }

  if (name.startsWith('__')) {
    var actualName = name.substring(1);
    this.setTagAttribute(actualName, newValue);

    return;
  }

  // 设置组件参数
  this.setComponentParam(name, newValue);

  if (name === constants.COMPONENT_PARAM_UI_NAME) {
    // UI名称
    this.setTagAttribute(constants.TAG_ATTR_UI_NAME, newValue);
  } else if (name === constants.COMPONENT_PARAM_DATA_NAME) {
    // 数据名称
    this.setTagAttribute(constants.TAG_ATTR_DATA_NAME, newValue);
  } else if (name === constants.COMPONENT_PARAM_COMPONENT_TYPE) {
    // 组件类型
    this.setTagAttribute(constants.TAG_ATTR_COMPONENT_TYPE, newValue);
  } else if (name === constants.COMPONENT_PARAM_INNER_HTML) {
    // 标签内 HTML 内容
    this.setInnerHtml(newValue);
  } else if (name === constants.COMPONENT_PARAM_INNER_HTML_FN) {
    // 标签内 HTML 内容
    this.setInnerHtmlFn(newValue);
  } else if (name === constants.COMPONENT_PARAM_APPEND_CLASS) {
    // 添加类名
    var oldValueStr = (utils.convertToString(this._tagAttributes[constants.TAG_ATTR_CLASS]) || '');
    var newValueStr = (utils.convertToString(newValue) || '');

    if (oldValueStr.length > 0) {
      newValueStr = (newValueStr.length > 0)
        ? oldValueStr.concat(' ', newValueStr) : oldValueStr;
    }

    this.setTagAttribute(constants.TAG_ATTR_CLASS, newValueStr);
  }
};
