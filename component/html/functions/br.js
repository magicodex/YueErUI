"use strict";

var utils = require('../../../lib/utils');

/**
 * @namespace html-br
 */

module.exports = br;

/**
 * @memberof html-br
 * @description 添加换行
 * @param {View} view 
 * @param {number} [brNumber]
 */
function br(view, brNumber) {
  if (utils.isNullOrUndefined(view)) {
    throw new Error('argument#0 "view" is null/undefined');
  }

  if (utils.isNullOrUndefined(brNumber)) {
    view.appendBody('<br>');
  } else {
    if (!utils.isNumber(brNumber)) {
      throw new Error('argument#0 "format" requird number');
    }

    for (var index = 0; index < brNumber; index++) {
      view.appendBody('<br>');
    }
  }
}
