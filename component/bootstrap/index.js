"use strict";

var contatObjects = require('../../lib/utils').concatObjects;
var dependency = require('./core/dependency');
var layout = require('./layout');
var button = require('./form/button');
var label = require('./form/label');
var input = require('./form/input');
var textarea = require('./form/textarea');
var select = require('./form/select');

module.exports = {
  layout: layout,
  button: button,
  label: label,
  input: input,
  textarea: textarea,
  select: select,
  dependencies: contatObjects([
    dependency.dependencies,
    layout.dependencies,
    button.dependencies,
    label.dependencies,
    input.dependencies,
    textarea.dependencies,
    select.dependencies
  ])
};
