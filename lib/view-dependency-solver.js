"use strict";

var utils = require('./utils');

module.exports = ViewDependencySolver;


/**
 * @class
 * @classdesc 依赖处理器，处理组件涉及到的依赖（比如外部样式和脚本）
 * @param {object} [opts]
 */
function ViewDependencySolver(opts) {
  opts = utils.emptyObjectIfNullOrUndefined(opts);

  this._dependencies = utils.emptyObjectIfNullOrUndefined(opts.dependencies);
}

/**
 * @description 处理依赖
 * @param {View} view
 * @param {{styles: string[], scriptes: string[], dependencies: string[]}} dependency 
 */
ViewDependencySolver.prototype.solveDependency = function (view, dependency) {
  if (utils.isNullOrUndefined(view)) {
    throw new Error('argument#0 "view" is null/undefined');
  }

  if (utils.isNullOrUndefined(dependency)) {
    throw new Error('argument#1 "dependency" is null/undefined');
  }

  var newDependencies = (dependency.dependencies || []);
  // 递归处理依赖
  for (var index = 0; index < newDependencies.length; index++) {
    var newDependencyName = newDependencies[index];
    var newDependency = this._dependencies[newDependencyName];

    if (utils.isNullOrUndefined(newDependency)) {
      throw new Error('not found dependency "' + newDependencyName + '"');
    }

    this.solveDependency(view, newDependency);
  }

  var styles = (dependency.styles || []);
  // 添加样式
  for (var index = 0; index < styles.length; index++) {
    var styleUrl = styles[index];
    view._htmlStyles.addStyle(styleUrl);
  }

  var scripts = (dependency.scripts || []);
  // 添加脚本
  for (var index = 0; index < scripts.length; index++) {
    var scriptUrl = scripts[index];
    view._htmlScripts.addScript(scriptUrl);
  }
};
