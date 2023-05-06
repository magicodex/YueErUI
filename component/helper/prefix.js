"use strict";

var utils = require('../../lib/utils');

// 样式 URL 前缀
const DEFAULT_STYLE_URL_PREFIX = '';
// 脚本 URL 前缀
const DEFAULT_SCRIPT_URL_PREFIX = '';

/**
 * @namespace helper-prefix
 */

var prefix = {};
prefix.styleUrlPrefix = DEFAULT_STYLE_URL_PREFIX;
prefix.scriptUrlPrefix = DEFAULT_SCRIPT_URL_PREFIX;

module.exports = prefix;

/**
 * @memberof helper-prefix
 * @description 加上样式 URL 前缀
 * @param {string} styleUrl 
 * @returns {string}
 */
prefix.style = function (styleUrl) {
  if (utils.isNullOrUndefined(styleUrl)) {
    throw new Error('argument#0 "styleUrl" is null/undefined');
  }

  if (!utils.isString(styleUrl)) {
    throw new Error('argument#0 "styleUrl" required string');
  }

  return prefix.styleUrlPrefix.concat(styleUrl);
};

/**
 * @memberof helper-prefix
 * @description 加上脚本 URL 前缀
 * @param {string} scriptUrl 
 * @returns {string}
 */
prefix.script = function (scriptUrl) {
  if (utils.isNullOrUndefined(scriptUrl)) {
    throw new Error('argument#0 "scriptUrl" is null/undefined');
  }

  if (!utils.isString(scriptUrl)) {
    throw new Error('argument#0 "scriptUrl" required string');
  }

  return prefix.scriptUrlPrefix.concat(scriptUrl);
};
