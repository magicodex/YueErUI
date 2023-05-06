"use strict";

var utils = require('../utils');

module.exports = HtmlStyles;


/**
 * @class
* @classdesc 表示 link 标签
 * @param {object} [opts]
 */
function HtmlStyles(opts) {
  opts = utils.emptyObjectIfNullOrUndefined(opts);

  // 添加样式标签时自动加上 URL 前缀
  this._urlPrefix = utils.emptyStringIfNullOrUndefined(opts.urlPrefix);
  // 排除的 URL (添加时跳过名单里的 URL）
  this._excludeUrls = utils.emptyArrayIfNullOrUndefined(opts.excludeUrls);
  // 已添加的样式标签
  this._htmlStrings = [];
  // 用来判断是否已经存在指定 URL
  this._urlIndexes = [];
  // 若设置了该值，则允许添加样式时改写 URL
  this._urlRewriter = opts.urlRewriter;
}

/**
 * @description 添加样式
 * @param {string} url 样式 URL
 * @param {object} [opts]
 */
HtmlStyles.prototype.addStyle = function (url, opts) {
  if (utils.isNullOrUndefined(url)) {
    throw new Error('argument#0 "url" is null/undefined');
  }

  if (!utils.isString(url)) {
    throw new Error('argument#0 "url" requird string');
  }

  this.addStyleFmt('<link rel="stylesheet" href="{0}">', url);
};

/**
 * @description 字符串格式化后添加样式
 * @param {string} format 样式标签格式
 * @param {string} url 样式 URL
 */
HtmlStyles.prototype.addStyleFmt = function (format, url) {
  if (utils.isNullOrUndefined(format)) {
    throw new Error('argument#0 "format" is null/undefined');
  }

  if (!utils.isString(format)) {
    throw new Error('argument#0 "format" requird string');
  }

  if (utils.isNullOrUndefined(url)) {
    throw new Error('argument#1 "url" is null/undefined');
  }

  if (!utils.isString(url)) {
    throw new Error('argument#1 "url" requird string');
  }

  // 排除指定的 URL
  if (this._excludeUrls.includes(url)) {
    return;
  }

  var originUrl = url;

  // 重写 URL
  if (!utils.isNullOrUndefined(this._urlRewriter)) {
    url = this._urlRewriter(url);
  }

  // 拼上 URL 前缀
  url = this._urlPrefix.concat(url);

  if (!(originUrl in this._urlIndexes)) {
    // 生成样式标签
    var htmlString = utils.formatString(format, [url]);

    this._htmlStrings.push(htmlString);
    this._urlIndexes[originUrl] = htmlString;
  }
};

/**
 * @description 渲染成 HTML 字符串
 * @param {Writer} writer 
 */
HtmlStyles.prototype.renderToString = function (writer) {
  if (utils.isNullOrUndefined(writer)) {
    throw new Error('argument#0 "writer" is null/undefined');
  }

  for (var index = 0; index < this._htmlStrings.length; index++) {
    var htmlString = this._htmlStrings[index];

    writer.appendLine(htmlString);
  }
};

