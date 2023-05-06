"use strict";

var utils = require('../../../lib/utils');

/**
 * @namespace html-title
 */

module.exports = title;

/**
 * @memberof html-title
 * @description 添加标题
 * @param {View} view 
 * @param {string} title
 */
function title(view, title) {
  if (utils.isNullOrUndefined(view)) {
    throw new Error('argument#0 "view" is null/undefined');
  }

  title = (utils.convertToString(title) || '');
  view.appendHead('<title>'.concat(title, '</title>'));
}
