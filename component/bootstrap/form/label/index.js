"use strict";

var label = require('./label');

module.exports = {
  defaultLabel: label.defaultLabel,
  formCheckLabel: label.formCheckLabel,
  customControlLabel: label.customControlLabel,
  customFileLabel: label.customFileLabel,
  srOnly: label.srOnly,
  dependencies: {
    'bs.label.defaultLabel': label.defaultLabel,
    'bs.label.formCheckLabel': label.formCheckLabel,
    'bs.label.customControlLabel': label.customControlLabel,
    'bs.label.customFileLabel': label.customFileLabel,
    'bs.label.srOnly': label.srOnly,
  }
};
