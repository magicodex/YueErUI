"use strict";

var utils = require('../../../lib/utils');

module.exports = Grid;
Grid.privateFn = {
  getColumnClassNames: getColumnClassNames
};

const DEFAULT_GRID_START_TAG = '<div class="container">';
const DEFAULT_GRID_END_TAG = '</div>';

/**
 * @class
 * @classdesc 栅格布局
 * @param {View} view 
 * @param {object} [opts]
 */
function Grid(view, opts) {
  if (utils.isNullOrUndefined(view)) {
    throw new Error('argument#0 "view" is null/undefined');
  }

  this._view = view;
  this._unfinishedRowCount = 0;
  this._unfinishedColumnCount = 0;
  this._unfinishedGroupCount = 0;

  opts = utils.emptyObjectIfNullOrUndefined(opts);
  this._startTag = ('startTag' in opts)
    ? opts.startTag : DEFAULT_GRID_START_TAG;
  this._endTag = ('endTag' in opts)
    ? opts.endTag : DEFAULT_GRID_END_TAG;
}

/**
 * @description 初始栅格布局
 * @param {function} innerHtmlFn 
 */
Grid.prototype.build = function (innerHtmlFn) {
  if (utils.isNullOrUndefined(innerHtmlFn)) {
    throw new Error('argument#0 "innerHtmlFn" is null/undefined');
  }

  if (!utils.isFunction(innerHtmlFn)) {
    throw new Error('argument#0 "innerHtmlFn" required function');
  }

  // 布局开始标签
  if (!utils.isNullOrUndefined(this._startTag)) {
    this._view.appendBody(this._startTag);
  }

  // 调用回调函数
  innerHtmlFn(this._view, this);

  this.groupEnd(this);
  this.colEnd(this);
  this.rowEnd(this);
  // 布局结束标签
  if (!utils.isNullOrUndefined(this._endTag)) {
    this._view.appendBody(this._endTag);
  }
};

/**
 * @description 添加 fieldset 标签
 * @param {string} [className]
 * @param {function} innerHtmlFn
 */
Grid.fieldset = function () {
  var className;
  var innerHtmlFn;

  if (arguments.length >= 2) {
    className = arguments[0];
    innerHtmlFn = arguments[1];
  } else if (arguments.length >= 1) {
    innerHtmlFn = arguments[0];
  }

  if (utils.isNullOrUndefined(className)) {
    this._view.appendBody('<fieldset>');
  } else {
    this._view.appendBody('<fieldset class="'.concat(className, '">'));
  }

  if (!utils.isNullOrUndefined(innerHtmlFn)) {
    innerHtmlFn(this._view);
  }

  this._view.appendBody('</fieldset>');
};

/**
 * @description 添加 legend 标签
 * @param {string} [className]
 * @param {function} innerHtml
 */
Grid.legend = function () {
  var className;
  var innerHtml;

  if (arguments.length >= 2) {
    className = arguments[0];
    innerHtml = arguments[1];
  } else if (arguments.length >= 1) {
    innerHtml = arguments[0];
  }

  var innerHtmlStr = (utils.convertToString(innerHtml) || '');

  if (utils.isNullOrUndefined(className)) {
    this._view.appendBody('<legend>'.concat(innerHtmlStr, '</legend>'));
  } else {
    this._view.appendBody('<legend class="'.concat(className, '">', innerHtmlStr, '</legend>'));
  }
};

/**
 * @description 新增一行
 * @param {string} [className]
 */
Grid.prototype.rowNew = function (className) {
  this.groupEnd(this);
  this.colEnd(this);
  this.rowEnd(this);

  if (utils.isNullOrUndefined(className)) {
    this._view.appendBody('<div class="row">');
  } else {
    className = utils.convertToString(className);
    this._view.appendBody('<div class="'.concat(className, '">'));
  }

  this._unfinishedRowCount++;
};

/**
 * @description 结束未完成行
 */
Grid.prototype.rowEnd = function rowEnd() {
  this.colEnd();

  while (this._unfinishedRowCount > 0) {
    this._view.appendBody('</div>');
    this._unfinishedRowCount--;
  }
};

/**
 * @description 新增一列
 * @param {string} [className]
 */
Grid.prototype.colNew = function (className) {
  this.groupEnd(this);
  this.colEnd(this);

  if (utils.isNullOrUndefined(className)) {
    this._view.appendBody('<div class="col">');
  } else {
    className = utils.convertToString(className);
    this._view.appendBody('<div class="'.concat(className, '">'));
  }

  this._unfinishedColumnCount++;
};

/**
 * @description 结束未完成列
 */
Grid.prototype.colEnd = function () {
  this.groupEnd();

  while (this._unfinishedColumnCount > 0) {
    this._view.appendBody('</div>');
    this._unfinishedColumnCount--;
  }
};

/**
 * @description 新增一组
 * @param {string} [className]
 */
Grid.prototype.groupNew = function (className) {
  this.groupEnd(this);

  if (utils.isNullOrUndefined(className)) {
    this._view.appendBody('<div class="form-group">');
  } else {
    className = utils.convertToString(className);
    this._view.appendBody('<div class="'.concat(className, '">'));
  }

  this._unfinishedGroupCount++;
};

/**
 * @description 结束未完成组
 */
Grid.prototype.groupEnd = function () {
  while (this._unfinishedGroupCount > 0) {
    this._view.appendBody('</div>');
    this._unfinishedGroupCount--;
  }
};

/**
 * @description 新增一行
 * @param {string} [className]
 */
Grid.prototype.groupRowNew = function (className) {
  this.groupEnd(this);
  this.colEnd(this);
  this.rowEnd(this);

  if (utils.isNullOrUndefined(className)) {
    this._view.appendBody('<div class="form-group row">');
  } else {
    className = utils.convertToString(className);
    this._view.appendBody('<div class="'.concat(className, '">'));
  }

  this._unfinishedRowCount++;
};

/**
 * @description 新增一列
 * @param {string} [className]
 */
Grid.prototype.groupColNew = function (className) {
  this.groupEnd(this);
  this.colEnd(this);

  if (utils.isNullOrUndefined(className)) {
    this._view.appendBody('<div class="form-group col">');
  } else {
    className = utils.convertToString(className);
    this._view.appendBody('<div class="'.concat(className, '">'));
  }

  this._unfinishedColumnCount++;
};

/**
 * @description 新增一列
 * @param {number} colNumOfSmallSize 
 */
Grid.prototype.colNewSm = function (colNumOfSmallSize) {
  this.colNewXl(null, null, null, colNumOfSmallSize);
};

/**
 * @description 新增一列
 * @param {number} colNumOfMediumSize 
 * @param {number} colNumOfSmallSize 
 */
Grid.prototype.colNewMd = function (colNumOfMediumSize, colNumOfSmallSize) {
  this.colNewXl(null, null, colNumOfMediumSize, colNumOfSmallSize);
};

/**
 * @description 新增一列
 * @param {number} colNumOfLargeSize 
 * @param {number} colNumOfMediumSize 
 * @param {number} colNumOfSmallSize 
 */
Grid.prototype.colNewLg = function (colNumOfLargeSize, colNumOfMediumSize, colNumOfSmallSize) {
  this.colNewXl(null, colNumOfLargeSize, colNumOfMediumSize, colNumOfSmallSize);
};

/**
 * @description 新增一列
 * @param {number} colNumOfExtraLargeSize 
 * @param {number} colNumOfLargeSize 
 * @param {number} colNumOfMediumSize 
 * @param {number} colNumOfSmallSize 
 */
Grid.prototype.colNewXl = function (colNumOfExtraLargeSize, colNumOfLargeSize,
  colNumOfMediumSize, colNumOfSmallSize) {
  this.groupEnd(this);
  this.colEnd(this);

  // 获取列的样式类名
  var classNames = getColumnClassNames(colNumOfExtraLargeSize, colNumOfLargeSize,
    colNumOfMediumSize, colNumOfSmallSize);

  if (classNames.length > 0) {
    var classNamesText = classNames.join(' ');
    this._view.appendBody('<div class="'.concat(classNamesText, '">'));
  } else {
    this._view.appendBody('<div class="col">');
  }

  this._unfinishedColumnCount++;
};

/**
 * @description 新增一列
 * @param {number} colNumOfSmallSize 
 */
Grid.prototype.groupColNewSm = function (colNumOfSmallSize) {
  this.groupColNewXl(null, null, null, colNumOfSmallSize);
};

/**
 * @description 新增一列
 * @param {number} colNumOfMediumSize 
 * @param {number} colNumOfSmallSize 
 */
Grid.prototype.groupColNewMd = function (colNumOfMediumSize, colNumOfSmallSize) {
  this.groupColNewXl(null, null, colNumOfMediumSize, colNumOfSmallSize);
};

/**
 * @description 新增一列
 * @param {number} colNumOfLargeSize 
 * @param {number} colNumOfMediumSize 
 * @param {number} colNumOfSmallSize 
 */
Grid.prototype.groupColNewLg = function (colNumOfLargeSize, colNumOfMediumSize, colNumOfSmallSize) {
  this.groupColNewXl(null, colNumOfLargeSize, colNumOfMediumSize, colNumOfSmallSize);
};

/**
 * @description 新增一列
 * @param {number} colNumOfExtraLargeSize 
 * @param {number} colNumOfLargeSize 
 * @param {number} colNumOfMediumSize 
 * @param {number} colNumOfSmallSize 
 */
Grid.prototype.groupColNewXl = function (colNumOfExtraLargeSize, colNumOfLargeSize,
  colNumOfMediumSize, colNumOfSmallSize) {
  this.groupEnd(this);
  this.colEnd(this);

  // 获取列的样式类名
  var classNames = getColumnClassNames(colNumOfExtraLargeSize, colNumOfLargeSize,
    colNumOfMediumSize, colNumOfSmallSize);

  if (classNames.length > 0) {
    var classNamesText = classNames.join(' ');
    this._view.appendBody('<div class="form-group '.concat(classNamesText, '">'));
  } else {
    this._view.appendBody('<div class="form-group col">');
  }

  this._unfinishedColumnCount++;
};

//
// 私有函数
//

/**
 * @private
 * @description 获取列的样式类名
 * @param {number} colNumOfExtraLargeSize 
 * @param {number} colNumOfLargeSize 
 * @param {number} colNumOfMediumSize 
 * @param {number} colNumOfSmallSize 
 * @returns {string[]}
 */
function getColumnClassNames(colNumOfExtraLargeSize, colNumOfLargeSize,
  colNumOfMediumSize, colNumOfSmallSize) {
  var classNames = [];

  if (!utils.isNullOrUndefined(colNumOfSmallSize)) {
    var colNumText = utils.convertToString(colNumOfSmallSize);
    classNames.push('col-sm-'.concat(colNumText));
  }

  if (!utils.isNullOrUndefined(colNumOfMediumSize)) {
    var colNumText = utils.convertToString(colNumOfMediumSize);
    classNames.push('col-md-'.concat(colNumText));
  }

  if (!utils.isNullOrUndefined(colNumOfLargeSize)) {
    var colNumText = utils.convertToString(colNumOfLargeSize);
    classNames.push('col-lg-'.concat(colNumText));
  }

  if (!utils.isNullOrUndefined(colNumOfExtraLargeSize)) {
    var colNumText = utils.convertToString(colNumOfExtraLargeSize);
    classNames.push('col-xl-'.concat(colNumText));
  }

  return classNames;
}
