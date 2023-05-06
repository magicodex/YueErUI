"use strict";

var utils = require('../../../lib/utils');
var constants = require('../constants');
var Tag = require('./tag');
var TagRenderConfig = require('./tag-render-config');
var selfClosingTagsGlobalConfig = require('./self-closing-tags-global-config');

module.exports = TagRenderer;


/**
 * @class
 * @classdesc 标签渲染器
 * @param {string} tagName 
 * @param {TagRenderConfig} [tagRenderConfig]  
 */
function TagRenderer(tagName, tagRenderConfig) {
  if (utils.isNullOrUndefined(tagName)) {
    throw new Error('argument#0 "tagName" is null/undefined');
  }

  if (!utils.isString(tagName)) {
    throw new Error('argument#0 "tagName" required string');
  }

  this._tagName = tagName;
  this._tagRenderConfig = tagRenderConfig;
}

/**
 * @description 渲染到 head 标签内
 * @param {View} view 
 */
TagRenderer.prototype.renderToHead = function (view) {
  if (utils.isNullOrUndefined(view)) {
    throw new Error('argument#0 "view" is null/undefined');
  }

  var appendFn = function (htmlString) {
    view.appendHead(htmlString);
  };

  this.doRender(view, appendFn);
};

/**
 * @description 渲染到 body 标签内
 * @param {View} view 
 */
TagRenderer.prototype.renderToBody = function (view) {
  if (utils.isNullOrUndefined(view)) {
    throw new Error('argument#0 "view" is null/undefined');
  }

  var appendFn = function (htmlString) {
    view.appendBody(htmlString);
  };

  this.doRender(view, appendFn);
};

/**
 * @description 渲染标签
 * @param {View} view 
 * @param {function} appendFn
 */
TagRenderer.prototype.doRender = function (view, appendFn) {
  var tagAttributes;
  var innerHtml;
  var innerHtmlFn;
  var selfClosing;

  if (!utils.isNullOrUndefined(this._tagRenderConfig)) {
    tagAttributes = this._tagRenderConfig.getAllTagAttributes();
    innerHtml = this._tagRenderConfig.getInnerHtml();
    innerHtmlFn = this._tagRenderConfig.getInnerHtmlFn();
    selfClosing = this._tagRenderConfig.getComponentParam(constants.COMPONENT_PARAM_SELF_CLOSING);
  }

  var tag = new Tag(this._tagName, tagAttributes);

  // 若没有指定是否自闭合则取全局配置
  if ((selfClosing !== true) && (selfClosing !== false)) {
    selfClosing = (this._tagName in selfClosingTagsGlobalConfig);
  }

  if (!selfClosing) {
    // 写入开始标签
    appendFn(tag.getStartTagString('>'));

    if (!utils.isNullOrUndefined(innerHtml)) {
      var innerHtmlStr = (utils.convertToString(innerHtml) || '');
      // 写入标签内 HTML 内容
      appendFn(innerHtmlStr);
    }

    if (!utils.isNullOrUndefined(innerHtmlFn)) {
      innerHtmlFn(view);
    }

    // 写入结束标签
    appendFn(tag.getEndTagString());
  } else {
    var selfClosingTagEnd = selfClosingTagsGlobalConfig[this._tagName];

    // 写入开始标签
    if (utils.isNullOrUndefined(selfClosingTagEnd)) {
      appendFn(tag.getStartTagString('/>'));
    } else {
      appendFn(tag.getStartTagString(selfClosingTagEnd));
    }
  }
};

