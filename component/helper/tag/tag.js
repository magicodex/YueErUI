"use strict";

var utils = require('../../../lib/utils');
var StringWriter = require('../../../lib/writer/string-writer');

module.exports = Tag;


/**
 * @class
 * @classdesc 封装 HTML 标签
 * @param {string} tagName 
 * @param {object} [attributes] 
 */
function Tag(tagName, attributes) {
  if (utils.isNullOrUndefined(tagName)) {
    throw new Error('argument#0 "tagName" is null/undefined');
  }

  if (!utils.isString(tagName)) {
    throw new Error('argument#0 "tagName" required string');
  }

  this._tagName = tagName;
  this._attributes = utils.emptyObjectIfNullOrUndefined(attributes);
}

/**
 * @description 获取开始标签 HTML 字符串
 * @param {string} tagEndString
 */
Tag.prototype.getStartTagString = function (tagEndString) {
  var writer = new StringWriter();
  this.writeStartTag(writer, tagEndString);

  return writer.getString();
};

/**
 * @description 获取结束标签 HTML 字符串
 */
Tag.prototype.getEndTagString = function () {
  var writer = new StringWriter();
  this.writeEndTag(writer);

  return writer.getString();
};

/**
 * @description 写入开始标签
 * @param {Writer} writer 
 * @param {string} tagEndString
 */
Tag.prototype.writeStartTag = function (writer, tagEndString) {
  if (utils.isNullOrUndefined(writer)) {
    throw new Error('argument#0 "writer" is null/undefined');
  }

  if (utils.isNullOrUndefined(tagEndString)) {
    throw new Error('argument#1 "tagEndString" is null/undefined');
  }

  if (!utils.isString(tagEndString)) {
    throw new Error('argument#1 "tagEndString" required string');
  }

  writer.append('<');
  writer.append(this._tagName);

  for (var name in this._attributes) {
    var value = this._attributes[name];

    writer.append(' ');
    // 属性名
    writer.append(name);

    // 属性值
    if (!utils.isNullOrUndefined(value)) {
      var valueStr = (utils.convertToString(value) || '');

      writer.append('=');
      writer.append('"');
      writer.append(valueStr);
      writer.append('"');
    }
  }

  writer.append(tagEndString);
};

/**
 * @description 写入结束标签
 * @param {Writer} writer 
 */
Tag.prototype.writeEndTag = function (writer) {
  if (utils.isNullOrUndefined(writer)) {
    throw new Error('argument#0 "writer" is null/undefined');
  }

  writer.append('</');
  writer.append(this._tagName);
  writer.append('>');
};
