"use strict";

var ViewTemplate = require('./view-template');
var utils = require('./utils');

module.exports = ViewRenderer;


/**
 * @class
 * @classdesc 视图渲染器
 * @param {object} [opts]
 */
function ViewRenderer(opts) {
  opts = utils.emptyObjectIfNullOrUndefined(opts);

  this._viewTemplate = utils.isNullOrUndefined(opts.viewTemplate)
    ? (new ViewTemplate()) : opts.viewTemplate;
}

/**
 * @description 获取视图模板
 * @returns {ViewTemplate}
 */
ViewRenderer.prototype.getViewTemplate = function () {
  return this._viewTemplate;
};

/**
 * @description 渲染成 HTML 字符串
 * @param {Writer} writer 
 * @param {View} view 
 */
ViewRenderer.prototype.renderToString = function (writer, view) {
  if (utils.isNullOrUndefined(writer)) {
    throw new Error('argument#0 "writer" is null/undefined');
  }

  if (utils.isNullOrUndefined(view)) {
    throw new Error('argument#1 "view" is null/undefined');
  }

  // head 标签开始
  this._viewTemplate.headStart(writer);

  // head 标签
  var htmlHead = view._htmlHead;
  htmlHead.renderToString(writer);
  // 样式
  var htmlStyles = view._htmlStyles;
  htmlStyles.renderToString(writer);

  // head 标签结束
  this._viewTemplate.headEnd(writer);
  // body 标签开始
  this._viewTemplate.bodyStart(writer);

  // body 标签
  var htmlBody = view._htmlBody;
  htmlBody.renderToString(writer);
  // 脚本
  var htmlScripts = view._htmlScripts;
  htmlScripts.renderToString(writer);

  // body 标签结束
  this._viewTemplate.bodyEnd(writer);
};
