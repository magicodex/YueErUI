"use strict";

var utils = require('../utils');
var StringWriter = require('../writer/string-writer');

module.exports = HtmlBody;


/**
 * @class
 * @classdesc 表示 HTML 的 BODY 标签
 */
function HtmlBody() {
  this._htmlStrings = [];
}

/**
 * @description 添加到 body 标签内
 * @param {string} htmlString 
 */
HtmlBody.prototype.appendBody = function (htmlString) {
  if (utils.isNullOrUndefined(htmlString)) {
    throw new Error('argument#0 "htmlString" is null/undefined');
  }

  if (!utils.isString(htmlString)) {
    throw new Error('argument#0 "htmlString" required string');
  }

  this._htmlStrings.push(htmlString);
};

/**
 * @description 字符串格式化后添加到 body 标签内
 * @param {string} format 
 * @param {Array} args
 */
HtmlBody.prototype.appendBodyFmt = function (format, args) {
  if (utils.isNullOrUndefined(format)) {
    throw new Error('argument#0 "format" is null/undefined');
  }

  if (!utils.isString(format)) {
    throw new Error('argument#0 "format" required string');
  }

  if (!(args instanceof Array)) {
    throw new Error('argument#1 "args required Array');
  }

  var htmlString = utils.formatString(format, args);
  this._htmlStrings.push(htmlString);
};

/**
 * @description 获取 HTML 字符串
 * @returns {string}
 */
HtmlBody.prototype.getString = function () {
  var writer = new StringWriter();
  this.renderToString(writer);

  return writer.getString();
};

/**
 * @description 渲染成 HTML 字符串
 * @param {Writer} writer 
 */
HtmlBody.prototype.renderToString = function (writer) {
  if (utils.isNullOrUndefined(writer)) {
    throw new Error('argument#0 "writer" is null/undefined');
  }

  for (var index = 0; index < this._htmlStrings.length; index++) {
    var htmlString = this._htmlStrings[index];

    writer.appendLine(htmlString);
  }
};
