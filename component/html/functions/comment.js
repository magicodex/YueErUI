"use strict";

var utils = require('../../../lib/utils');

/**
 * @namespace html-comment
 */

module.exports = comment;

/**
 * @memberof html-comment
 * @description 添加注释
 * @param {View} view 
 * @param {string} comment
 */
function comment(view, comment) {
  if (utils.isNullOrUndefined(view)) {
    throw new Error('argument#0 "view" is null/undefined');
  }

  comment = (utils.convertToString(comment) || '');
  view.appendBody('<!-- '.concat(comment, ' -->'));
}
