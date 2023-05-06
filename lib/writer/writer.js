"use strict";

module.exports = Writer;

//
// 该类只是用来说明 Writer 类应该提供的方法
//

/**
 * @class
 */
function Writer() {
  //
}

/**
 * @description 添加字符串
 * @param {string} argString
 */
Writer.prototype.append = function (argString) {
  throw new Error('Writer.append is not implemented');
};

/**
 * @description 添加字符串并换行
 * @param {string} argString
 */
Writer.prototype.appendLine = function (argString) {
  throw new Error('Writer.appendLine is not implemented');
};

/**
 * @description 返回添加的字符串
 * @returns {string}
 */
Writer.prototype.getString = function () {
  throw new Error('Writer.getString is not implemented');
};
