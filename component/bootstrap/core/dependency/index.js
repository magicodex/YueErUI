"use strict";

var bootstrapStyleDependency = require('./bootstrap-style-dependency');
var bootstrapScriptDependency = require('./bootstrap-script-dependency');

module.exports = {
  dependencies: {
    'bs.dependency.bootstrap.style': bootstrapStyleDependency,
    'bs.dependency.bootstrap.script': bootstrapScriptDependency
  }
};
