"use strict";

var select = require('./select');
var option = require('./option');
var optgroup = require('./optgroup');

module.exports = {
  defaultSelect: select.defaultSelect,
  customSelect: select.customSelect,
  defaultOption: option.defaultOption,
  defaultOptgroup: optgroup.defaultOptgroup,
  dependencies: {
    'bs.select.defaultSelect': select.defaultSelect,
    'bs.select.customSelect': select.customSelect,
    'bs.select.defaultOption': option.defaultOption,
    'bs.select.defaultOptgroup': option.defaultOptgroup
  }
};
