"use strict";

var utils = require('../../lib/utils');

/**
 * @namespace helper-autoSolveDependency 
 */

module.exports = autoSolveDependency;

/**
 * @memberof helper-autoSolveDependency 
 * @description 自动处理依赖
 * @param {function} renderFn 
 * @returns {function}
 */
function autoSolveDependency(renderFn) {
  if (utils.isNullOrUndefined(renderFn)) {
    throw new Error('argument#0 "renderFn" is null/undefined');
  }

  return function () {
    if (arguments.length > 0) {
      var view = arguments[0];
      var viewSolveDependencyFn = view.solveDependency;

      // 处理依赖
      if (!utils.isNullOrUndefined(viewSolveDependencyFn)) {
        view.solveDependency(renderFn);
      }
    }

    // 调用渲染函数
    renderFn.apply(null, arguments);
  };
}
