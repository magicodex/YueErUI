"use strict";

/**
 * @namespace utils
 */


var utils = {};
module.exports = utils;

//
// 判断给定的参数是什么类型
//

/**
 * @memberof utils
 * @description 判断给定参数的值是不是字符串类型
 * @param {*} arg 
 * @returns {boolean} 若给定参数的值是字符串则返回 true, 否则返回 false 
 */
utils.isString = function (arg) {
  return (typeof arg === 'string');
};

/**
 * @memberof utils
 * @description 判断给定参数的值是不是数字类型
 * @param {*} arg 
 * @returns {boolean} 若给定参数的值是数字则返回 true, 否则返回 false 
 */
utils.isNumber = function (arg) {
  return (typeof arg === 'number');
};

/**
 * @memberof utils
 * @param {*} arg 判断给定参数的值是不是对象(包括 null 值)
 * @returns {boolean} 若给定参数的值是对象则返回 true, 反则返回 false
 */
utils.isObject = function (arg) {
  return (typeof arg === 'object');
};

/**
 * @memberof utils
 * @description 判断给定参数的值是不是函数
 * @param {*} arg 
 * @returns {boolean} 若给定参数的值是函数则返回 true, 反则返回 false
 */
utils.isFunction = function (arg) {
  return (typeof arg === 'function');
};

/**
 * @memberof utils
 * @description 判断给定参数的值是不是 null/undefined
 * @param {*} arg 
 * @returns {boolean} 若给定参数的值是 null/undefined 则返回 true, 否则返回 false
 */
utils.isNullOrUndefined = function (arg) {
  return (arg === null || arg === undefined);
};

/**
 * @memberof utils
 * @description 判断给定参数的值是不是空字符
 * @param {*} arg 
 * @returns {boolean} 若给定参数的值不是空字符串则返回 true, 否则返回 false
 */
utils.isNotEmptyString = function (arg) {
  return (utils.isString(arg) && arg.length > 0);
};

/**
 * @memberof utils
 * @description 判断给定参数的值是不是空对象
 * @param {*} arg 
 * @returns {boolean} 若给定参数的值不是空对象则返回 true, 否则返回 false
 */
utils.isNotEmptyObject = function (arg) {
  if (utils.isNullOrUndefined(arg) || !utils.isObject(arg)) {
    return false;
  }

  for (var key in arg) {
    return true;
  }

  return false;
};

//
// 当参数值是 null/undefined 时取默认值
//

/**
 * @memberof utils
 * @description 若第一个参数不是 null/undefined 则返回第一个参数，否则返回空字符串
 * @param {*} arg 
 * @returns {string}
 */
utils.emptyStringIfNullOrUndefined = function (arg) {
  if (utils.isNullOrUndefined(arg)) {
    return '';
  }

  return arg;
};

/**
 * @memberof utils
 * @description 若第一个参数不是 null/undefined 则返回第一个参数，否则返回空数组
 * @param {*} arg 
 * @returns {Array}
 */
utils.emptyArrayIfNullOrUndefined = function (arg) {
  if (utils.isNullOrUndefined(arg)) {
    return [];
  }

  return arg;
};

/**
 * @memberof utils
 * @description 若第一个参数不是 null/undefined 则返回第一个参数，否则返回空对象
 * @param {*} arg 
 * @returns {object}
 */
utils.emptyObjectIfNullOrUndefined = function (arg) {
  if (utils.isNullOrUndefined(arg)) {
    return {};
  }

  return arg;
};

//
// 处理字符串和对象的方法
//

/**
 * @memberof utils
 * @description 转换给定参数的值成字符串
 * @param {*} arg
 * @returns {string} 若参数的值不是 null/undefined 则返回字符串，否则返回 null/undefined
 */
utils.convertToString = function (arg) {
  if (typeof arg === 'string') {
    return arg;
  }

  if (utils.isNullOrUndefined(arg)) {
    return arg;
  }

  return String(arg);
};

/**
 * @memberof utils
 * @description 根据给定的字符串格式和参数做字符串格式化
 * @param {string} format 字符串格式的占位符是 {0}、{1}、{2} ...
 * @param {string[]} args
 * @returns {string} 返回字符串格式化后的字符串
 */
utils.formatString = function (format, objectArray) {
  if (utils.isNullOrUndefined(format)) {
    throw new Error('argument#0 "format" is null/undefined');
  }

  if (!utils.isString(format)) {
    throw new Error('argument#0 "format" requird string');
  }

  if (!(objectArray instanceof Array)) {
    throw new Error('argument#1 "objectArray" required Array');
  }

  // 替换占位符 {数字}
  var newString = format.replace(/\{([0-9]+)\}/g, function (match, index) {
    var argIndex = parseInt(index);
    var arg = objectArray[argIndex];

    return (utils.convertToString(arg) || '');
  });

  return newString;
};

/**
 * @memberof utils
 * @description 合并多个对象的字段到新的对象上
 * @param {object[]} objectArray 
 * @returns {object}
 */
utils.concatObjects = function (objectArray) {
  if (!(objectArray instanceof Array)) {
    throw new Error('argument#0 "objectArray" required Array');
  }

  var newObj = {};

  for (var index = 0; index < objectArray.length; index++) {
    var obj = objectArray[index];

    for (var key in obj) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};

