"use strict";

var utils = require('../../../lib/utils');
var resolveCustomExpression = require('./resolve-custom-expression');
var resolvedResultConstants = require('./resolved-result-constants');

/**
 * @namespace helper-resolveCustomArguments 
 */

module.exports = resolveCustomArguments;
resolveCustomArguments.privateFn = {
  getExpressionFromArguments: getExpressionFromArguments,
  getInnerHtmlOrInnerHtmlFnFromArguments: getInnerHtmlOrInnerHtmlFnFromArguments,
  getOptionsFromArguments: getOptionsFromArguments,
  isExpressionArgument: isExpressionArgument,
  isInnerHtmlOrInnerHtmlFnArgument: isInnerHtmlOrInnerHtmlFnArgument,
  isOptionsArgument: isOptionsArgument
};

/**
 * @memberof helper-resolveCustomArguments 
 * @description 解析自定义参数
 * @param {(Arguments|Array)} args 
 * @returns {object}
 */
function resolveCustomArguments(args) {
  if (utils.isNullOrUndefined(args)) {
    throw new Error('argument#0 "args" is null/undefined');
  }

  var length = args.length;
  var expression = null;
  var innerHtmlOrInnerHtmlFn = null;
  var opts = null;
  var result = {};

  if (length >= 1) {
    result.view = args[0];
  }

  if (length >= 2) {
    result.tagName = args[1];
  }

  if (length >= 3) {
    expression = getExpressionFromArguments(args);
    innerHtmlOrInnerHtmlFn = getInnerHtmlOrInnerHtmlFnFromArguments(args);
    opts = getOptionsFromArguments(args);
  }

  if (!utils.isNullOrUndefined(opts)) {
    result.options = opts;
  }

  if (utils.isString(innerHtmlOrInnerHtmlFn)) {
    result[resolvedResultConstants.INNER_HTML] = innerHtmlOrInnerHtmlFn;
  } else if (utils.isFunction(innerHtmlOrInnerHtmlFn)) {
    result[resolvedResultConstants.INNER_HTML_FN] = innerHtmlOrInnerHtmlFn;
  }

  if (!utils.isNullOrUndefined(expression)) {
    // 解析自定义表达式
    var resolvedExpressionResult = resolveCustomExpression(expression);

    if (utils.isNotEmptyObject(resolvedExpressionResult)) {
      result = utils.concatObjects([result, resolvedExpressionResult]);
    }
  }

  return result;
}

/**
 * @private
 * @description 获取 expression 参数
 * @param {Array} args 
 * @returns {(string|Array)}
 */
function getExpressionFromArguments(args) {
  var length = args.length;
  var result;

  if (length >= 5) {
    result = args[2];
  } else if (length >= 3) {
    var arg = args[2];

    if (isExpressionArgument(arg)) {
      result = arg;
    }
  }

  return result;
}

/**
 * @private
 * @description 获取 innerHtml/innerHtmlFn 参数
 * @param {Array} args 
 * @returns {(string|function)}
 */
function getInnerHtmlOrInnerHtmlFnFromArguments(args) {
  var length = args.length;
  var result;

  if (length >= 5) {
    result = args[3];
  } else if (length >= 4) {
    var arg = args[2];

    if (isExpressionArgument(arg)) {
      arg = args[3];
    } else {
      return arg;
    }

    if (isInnerHtmlOrInnerHtmlFnArgument(arg)) {
      return arg;
    }
  } else if (length >= 3) {
    var arg = args[2];

    if (!isExpressionArgument(arg)
      && isInnerHtmlOrInnerHtmlFnArgument(arg)) {
      result = arg;
    }
  }

  return result;
}

/**
 * @private
 * @description 获取 opts 参数
 * @param {Array} args 
 * @returns {object}
 */
function getOptionsFromArguments(args) {
  var length = args.length;
  var result;

  if (length >= 5) {
    result = args[4];
  } else if (length >= 4) {
    var arg = args[2];

    if (isExpressionArgument(arg)) {
      arg = args[3];
    } else {
      return args[3];
    }

    if (!isInnerHtmlOrInnerHtmlFnArgument(arg)) {
      return arg;
    }
  } else if (length >= 3) {
    var arg = args[2];

    if (!isExpressionArgument(arg)
      && !isInnerHtmlOrInnerHtmlFnArgument(arg)) {
      result = arg;
    }
  }

  return result;
}

/**
 * @private
 * @description 判断是否 expression 参数
 * @param {*} arg 
 * @returns {boolean}
 */
function isExpressionArgument(arg) {
  var result = false;

  if (utils.isNullOrUndefined(arg)) {
    return true;
  }

  if (utils.isString(arg)) {
    if (arg.startsWith('#')
      || arg.startsWith('$')
      || arg.startsWith('@')) {
      result = true;
    }
  } else if (arg instanceof Array) {
    result = true;
  }

  return result;
}

/**
 * @private
 * @description 判断是否 innerHtml/innerHtmlFn 参数
 * @param {*} arg 
 * @returns {boolean}
 */
function isInnerHtmlOrInnerHtmlFnArgument(arg) {
  var result = false;

  if (utils.isNullOrUndefined(arg)) {
    return true;
  }

  if (utils.isString(arg)) {
    if (!arg.startsWith('#')
      && !arg.startsWith('$')
      && !arg.startsWith('@')) {
      result = true;
    }
  } else if (utils.isFunction(arg)) {
    result = true;
  }

  return result;
}

/**
 * @private
 * @description 判断是否 opts 参数
 * @param {*} arg 
 * @returns {boolean}
 */
function isOptionsArgument(arg) {
  var result = false;

  if (utils.isNullOrUndefined(arg)) {
    return true;
  }

  if (utils.isObject(arg)
    && !(arg instanceof Array)) {
    result = true;
  }

  return result;
}
