"use strict";

var utils = require('./utils');

module.exports = ViewTemplate;

// head 标签的的起始 HTML 字符串
const DEFAULT_HEAD_START_HTML = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">\n`;

// head 标签的结束 HTML 字符串
const DEFAULT_HEAD_END_HTML = '</head>\n';

// body 标签的起始 HTML 字符串
const DEFAULT_BODY_START_HTML = '<body>\n';

// body 标签的结束 HTML 字符串
const DEFAULT_BODY_END_HTML = '</body>\n</html>';


/**
 * @class
 * @classdesc 视图模板，定义页面基本结构
 * @param {object} [opts]
 */
function ViewTemplate(opts) {
  opts = utils.emptyObjectIfNullOrUndefined(opts);

  this._styleUrls = utils.emptyArrayIfNullOrUndefined(opts.styleUrls);
  this._scriptUrls = utils.emptyArrayIfNullOrUndefined(opts.scriptUrls);

  this._headStartHtml = ('headStartHtml' in opts)
    ? opts.headStartHtml : DEFAULT_HEAD_START_HTML;
  this._headEndHtml = ('headEndHtml' in opts)
    ? opts.headEndHtml : DEFAULT_HEAD_END_HTML;
  this._bodyStartHtml = ('bodyStartHtml' in opts)
    ? opts.bodyStartHtml : DEFAULT_BODY_START_HTML;
  this._bodyEndHtml = ('bodyEndHtml' in opts)
    ? opts.bodyEndHtml : DEFAULT_BODY_END_HTML;
};

/**
 * @description head 标签开始
 * @param {Writer} writer 
 */
ViewTemplate.prototype.headStart = function (writer) {
  if (utils.isNullOrUndefined(writer)) {
    throw new Error('argument#0 "writer" is null/undefined');
  }

  if (!utils.isNullOrUndefined(this._headStartHtml)) {
    writer.append(this._headStartHtml);
  }
};

/**
 * @description head 标签结束
 * @param {Writer} writer 
 */
ViewTemplate.prototype.headEnd = function (writer) {
  if (utils.isNullOrUndefined(writer)) {
    throw new Error('argument#0 "writer" is null/undefined');
  }

  if (!utils.isNullOrUndefined(this._headEndHtml)) {
    writer.append(this._headEndHtml);
  }
};

/**
 * @description body 标签开始
 * @param {Writer} writer 
 */
ViewTemplate.prototype.bodyStart = function (writer) {
  if (utils.isNullOrUndefined(writer)) {
    throw new Error('argument#0 "writer" is null/undefined');
  }

  if (!utils.isNullOrUndefined(this._bodyStartHtml)) {
    writer.append(this._bodyStartHtml);
  }
};

/**
 * @description body 标签结束
 * @param {Writer} writer 
 */
ViewTemplate.prototype.bodyEnd = function (writer) {
  if (utils.isNullOrUndefined(writer)) {
    throw new Error('argument#0 "writer" is null/undefined');
  }

  if (!utils.isNullOrUndefined(this._bodyEndHtml)) {
    writer.append(this._bodyEndHtml);
  }
};

/**
 * @description 样式标签开始
 * @param {HtmlStyles} htmlStyles 
 */
ViewTemplate.prototype.stylesStart = function (htmlStyles) {
  if (utils.isNullOrUndefined(htmlStyles)) {
    throw new Error('argument#0 "htmlStyles" is null/undefined');
  }

  for (var index = 0; index < this._styleUrls.length; index++) {
    var styleUrl = this._styleUrls[index];

    htmlStyles.addStyle(styleUrl);
  }
};

/**
 * @description 样式标签结束
 * @param {HtmlStyles} htmlStyles 
 */
ViewTemplate.prototype.stylesEnd = function (htmlStyles) {
  //
};

/**
 * @description 脚本标签开始
 * @param {HtmlScripts} htmlScripts 
 */
ViewTemplate.prototype.scriptsStart = function (htmlScripts) {
  if (utils.isNullOrUndefined(htmlScripts)) {
    throw new Error('argument#0 "htmlScripts" is null/undefined');
  }

  for (var index = 0; index < this._scriptUrls.length; index++) {
    var scriptUrl = this._scriptUrls[index];

    htmlScripts.addScript(scriptUrl);
  }
};

/**
 * @description 脚本标签结束
 * @param {HtmlScripts} htmlScripts 
 */
ViewTemplate.prototype.scriptsEnd = function (htmlScripts) {
  //
};
