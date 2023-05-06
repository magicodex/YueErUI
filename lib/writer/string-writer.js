"use strict";

var utils = require('../utils');

module.exports = StringWriter;

/**
 * @class
 */
function StringWriter() {
  this._strings = [];
}

/**
 * @description 添加字符串
 * @param {string} argString
 */
StringWriter.prototype.append = function (argString) {
  if (utils.isNullOrUndefined(argString)) {
    throw new Error('argument#0 "argString" is null/undefined');
  }

  if (!utils.isString(argString)) {
    throw new Error('argument#0 "argString" required string');
  }

  if (argString.length > 0) {
    this._strings.push(argString);
  }
};

/**
 * @description 添加字符串并换行
 * @param {string} argString
 */
StringWriter.prototype.appendLine = function (argString) {
  if (utils.isNullOrUndefined(argString)) {
    throw new Error('argument#0 "argString" is null/undefined');
  }

  if (!utils.isString(argString)) {
    throw new Error('argument#0 "argString" required string');
  }

  if (argString.length > 0) {
    this._strings.push(argString);
  }

  this._strings.push('\n');
};

/**
 * @description 返回添加的字符串
 * @returns {string}
 */
StringWriter.prototype.getString = function () {
  return this._strings.join('');
};
