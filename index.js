"use strict";

var View = require('./lib/view');
var ViewDependencySolver = require('./lib/view-dependency-solver');
var ViewTemplate = require('./lib/view-template');
var ViewRenderer = require('./lib/view-renderer');
var HtmlHead = require('./lib/html/html-head');
var HtmlBody = require('./lib/html/html-body');
var HtmlStyles = require('./lib/html/html-styles');
var HtmlScripts = require('./lib/html/html-scripts');
var utils = require('./lib/utils');
var StringWriter = require('./lib/writer/string-writer');

var yer = {
  View: View,
  ViewDependencySolver: ViewDependencySolver,
  ViewTemplate: ViewTemplate,
  ViewRenderer: ViewRenderer,
  HtmlHead: HtmlHead,
  HtmlBody: HtmlBody,
  HtmlStyles: HtmlStyles,
  HtmlScripts: HtmlScripts,
  utils: utils,
  StringWriter: StringWriter
};

module.exports = yer;
