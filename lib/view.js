"use strict";

var HtmlHead = require('./html/html-head');
var HtmlBody = require('./html/html-body');
var HtmlStyles = require('./html/html-styles');
var HtmlScripts = require('./html/html-scripts');
var ViewRenderer = require('./view-renderer');
var ViewDependencySolver = require('./view-dependency-solver');
var utils = require('./utils');
var html = require('../component/html');

module.exports = View;

/**
 * @class
 * @classdesc 表示页面视图(UI界面)
 * @param {object} [opts]
 */
function View(opts) {
  opts = utils.emptyObjectIfNullOrUndefined(opts);

  // head 标签
  this._htmlHead = utils.isNullOrUndefined(opts.htmlHead)
    ? (new HtmlHead()) : opts.htmlHead;
  // body 标签
  this._htmlBody = utils.isNullOrUndefined(opts.htmlBody)
    ? (new HtmlBody()) : opts.htmlBody;
  // 样式标签
  this._htmlStyles = utils.isNullOrUndefined(opts.htmlStyles)
    ? (new HtmlStyles()) : opts.htmlStyles;
  // 脚本标签
  this._htmlScripts = utils.isNullOrUndefined(opts.htmlScripts)
    ? (new HtmlScripts()) : opts.htmlScripts;
  // 渲染器
  this._viewRenderer = utils.isNullOrUndefined(opts.viewRenderer)
    ? (new ViewRenderer()) : opts.viewRenderer;
  // 依赖解决器
  this._viewDependencySolver = utils.isNullOrUndefined(opts.viewDependencySolver)
    ? (new ViewDependencySolver()) : opts.viewDependencySolver;

  var viewTemplate = this._viewRenderer.getViewTemplate();
  // 初始样式
  viewTemplate.stylesStart(this._htmlStyles);
  // 初始脚本
  viewTemplate.scriptsStart(this._htmlScripts);
}

/**
 * 获取 head 标签对象
 * @returns {HtmlHead}
 */
View.prototype.getHtmlHead = function () {
  return this._htmlHead;
};

/**
 * 获取 body 标签对象
 * @returns {HtmlBody}
 */
View.prototype.getHtmlBody = function () {
  return this._htmlBody;
};

/**
 * @description 添加标题
 * @param {string} title 
 */
View.prototype.title = function (title) {
  html.title(this, title);
};

/**
 * @description 添加换行
 * @param {number} [brNumber]
 */
View.prototype.br = function (brNumber) {
  html.br(this, brNumber);
};

/**
 * @description 添加注释
 * @param {string} comment 
 */
View.prototype.comment = function (comment) {
  html.comment(this, title);
};

/**
 * @description 添加标签
 * @param {string} tagName
 * @param {(string|Array)} [expression]
 * @param {(string|function)} [innerHtmlOrInnerHtmlFn]
 * @param {object} [opts]
 */
View.prototype.tag = function (tagName) {
  var paramArray = [this];

  for (var index = 0; index < arguments.length; index++) {
    paramArray.push(arguments[index]);
  }

  html.tag.apply(html, paramArray);
};

/**
 * @description 添加到 head 标签内
 * @param {string} htmlString 
 */
View.prototype.appendHead = function (htmlString) {
  this._htmlHead.appendHead(htmlString);
};

/**
 * @description 添加到 head 标签内
 * @param {string} format 
 * @param {Array} args
 */
View.prototype.appendHeadFmt = function (format, args) {
  this._htmlHead.appendHeadFmt(format, args);
};

/**
 * @description 添加到 body 标签内
 * @param {string} htmlString 
 */
View.prototype.appendBody = function (htmlString) {
  this._htmlBody.appendBody(htmlString);
};

/**
 * @description 添加到 body 标签内
 * @param {string} format 
 * @param {Array} args
 */
View.prototype.appendBodyFmt = function (format, args) {
  this._htmlBody.appendBodyFmt(format, args);
};

/**
 * @description 添加样式
 * @param {string} url 样式 URL
 * @param {object} [opts]
 */
View.prototype.addStyle = function (url, opts) {
  this._htmlStyles.addStyle(url, opts, opts);
};

/**
 * @description 添加样式
 * @param {string} format 样式标签格式
 * @param {string} url 样式 URL
 */
View.prototype.addStyleFmt = function (format, url) {
  this._htmlStyles.addStyleFmt(format, url);
};

/**
 * @description 添加脚本
 * @param {string} url 脚本 URL
 * @param {object} [opts]
 */
View.prototype.addScript = function (url, opts) {
  this._htmlScripts.addScript(url, opts);
};

/**
 * @description 添加脚本
 * @param {string} format 脚本标签格式
 * @param {string} url 脚本 URL
 */
View.prototype.addScriptFmt = function (format, url) {
  this._htmlScripts.addScriptFmt(format, url);
};


/**
 * @description 处理依赖
 * @param {{styles: string[], scriptes: string[], dependencies: string[]}} dependency 
 */
View.prototype.solveDependency = function (dependency) {
  this._viewDependencySolver.solveDependency(this, dependency);
};

/**
 * @description 渲染成 HTML 字符串
 * @param {Writer} writer 
 */
View.prototype.renderToString = function (writer) {
  var viewTemplate = this._viewRenderer.getViewTemplate();
  // 最后添加的样式
  viewTemplate.stylesEnd(this._htmlStyles);
  // 最后添加的脚本
  viewTemplate.scriptsEnd(this._htmlScripts);

  this._viewRenderer.renderToString(writer, this);
};

