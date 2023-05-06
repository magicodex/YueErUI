"use strict";

var layout = require('./layout');

module.exports = {
  container: layout.container,
  containerFluid: layout.containerFluid,
  form: layout.form,
  formInline: layout.formInline,
  dependencies: {
    'bs.layout.container': layout.container,
    'bs.layout.containerFluid': layout.containerFluid,
    'bs.layout.form': layout.form,
    'bs.layout.formInline': layout.formInline
  }
};
