"use strict";

var constants = require('../../../helper/constants');
var utils = require('../../../../lib/utils');
var renderTagWithExpression = require('../../core/renderer/render-tag-with-expression');
var renderInputBox = require('../../core/renderer/form/render-input-box');

/**
 * @namespace bs-input
 */

var input = {};
module.exports = input;

/**
 * @memberof bs-input
 * @description 渲染输入框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} [placeholder]
 * @param {object} [opts] 
 */
input.text = function (view, expression) {
  var config = {};
  config['type'] = 'text';
  config[constants.TAG_ATTR_CLASS] = 'form-control';
  var newArguments = [view, expression, config];

  if (arguments.length >= 3) {
    newArguments.push(arguments[2]);
  }

  if (arguments.length >= 4) {
    newArguments.push(arguments[3]);
  }

  renderInputBox.apply(null, newArguments);
};

/**
 * @memberof bs-input
 * @description 渲染输入框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} [placeholder]
 * @param {object} [opts] 
 */
input.password = function (view, expression) {
  var config = {};
  config['type'] = 'password';
  config[constants.TAG_ATTR_CLASS] = 'form-control';
  var newArguments = [view, expression, config];

  if (arguments.length >= 3) {
    newArguments.push(arguments[2]);
  }

  if (arguments.length >= 4) {
    newArguments.push(arguments[3]);
  }

  renderInputBox.apply(null, newArguments);
};

/**
 * @memberof bs-input
 * @description 渲染输入框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} [placeholder]
 * @param {object} [opts] 
 */
input.number = function (view, expression) {
  var config = {};
  config['type'] = 'number';
  config[constants.TAG_ATTR_CLASS] = 'form-control';
  var newArguments = [view, expression, config];

  if (arguments.length >= 3) {
    newArguments.push(arguments[2]);
  }

  if (arguments.length >= 4) {
    newArguments.push(arguments[3]);
  }

  renderInputBox.apply(null, newArguments);
};

/**
 * @memberof bs-input
 * @description 渲染输入框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} [placeholder]
 * @param {object} [opts] 
 */
input.email = function (view, expression) {
  var config = {};
  config['type'] = 'email';
  config[constants.TAG_ATTR_CLASS] = 'form-control';
  var newArguments = [view, expression, config];

  if (arguments.length >= 3) {
    newArguments.push(arguments[2]);
  }

  if (arguments.length >= 4) {
    newArguments.push(arguments[3]);
  }

  renderInputBox.apply(null, newArguments);
};

/**
 * @memberof bs-input
 * @description 渲染输入框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} [placeholder]
 * @param {object} [opts] 
 */
input.url = function (view, expression) {
  var config = {};
  config['type'] = 'url';
  config[constants.TAG_ATTR_CLASS] = 'form-control';
  var newArguments = [view, expression, config];

  if (arguments.length >= 3) {
    newArguments.push(arguments[2]);
  }

  if (arguments.length >= 4) {
    newArguments.push(arguments[3]);
  }

  renderInputBox.apply(null, newArguments);
};

/**
 * @memberof bs-input
 * @description 渲染输入框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} [placeholder]
 * @param {object} [opts] 
 */
input.search = function (view, expression) {
  var config = {};
  config['type'] = 'search';
  config[constants.TAG_ATTR_CLASS] = 'form-control';
  var newArguments = [view, expression, config];

  if (arguments.length >= 3) {
    newArguments.push(arguments[2]);
  }

  if (arguments.length >= 4) {
    newArguments.push(arguments[3]);
  }

  renderInputBox.apply(null, newArguments);
};

/**
 * @memberof bs-input
 * @description 渲染输入框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} [placeholder]
 * @param {object} [opts] 
 */
input.tel = function (view, expression) {
  var config = {};
  config['type'] = 'tel';
  config[constants.TAG_ATTR_CLASS] = 'form-control';
  var newArguments = [view, expression, config];

  if (arguments.length >= 3) {
    newArguments.push(arguments[2]);
  }

  if (arguments.length >= 4) {
    newArguments.push(arguments[3]);
  }

  renderInputBox.apply(null, newArguments);
};

/**
 * @memberof bs-input
 * @description 渲染按钮
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} value
 * @param {object} [opts] 
 */
input.button = function (view, expression, value, opts) {
  var config = {};
  config['type'] = 'button';
  config[constants.TAG_ATTR_CLASS] = 'btn btn-primary';

  if (!utils.isNullOrUndefined(value)) {
    config['value'] = value;
  }

  renderTagWithExpression(view, 'input', expression, config, opts);
};


/**
 * @memberof bs-input
 * @description 渲染提交按钮
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} value
 * @param {object} [opts] 
 */
input.submit = function (view, expression, value, opts) {
  var config = {};
  config['type'] = 'submit';
  config[constants.TAG_ATTR_CLASS] = 'btn btn-primary';

  if (!utils.isNullOrUndefined(value)) {
    config['value'] = value;
  }

  renderTagWithExpression(view, 'input', expression, config, opts);
};


/**
 * @memberof bs-input
 * @description 渲染重置按钮
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} value
 * @param {object} [opts] 
 */
input.reset = function (view, expression, value, opts) {
  var config = {};
  config['type'] = 'reset';
  config[constants.TAG_ATTR_CLASS] = 'btn btn-primary';

  if (!utils.isNullOrUndefined(value)) {
    config['value'] = value;
  }

  renderTagWithExpression(view, 'input', expression, config, opts);
};

/**
 * @memberof bs-input
 * @description 渲染隐藏框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} value
 * @param {object} [opts] 
 */
input.hidden = function (view, expression, value, opts) {
  var config = {};
  config['type'] = 'hidden';

  if (!utils.isNullOrUndefined(value)) {
    config['value'] = value;
  }

  renderTagWithExpression(view, 'input', expression, config, opts);
};

/**
 * @memberof bs-input
 * @description 渲染图片
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} value
 * @param {object} [opts] 
 */
input.image = function (view, expression, value, opts) {
  var config = {};
  config['type'] = 'image';

  if (!utils.isNullOrUndefined(value)) {
    config['value'] = value;
  }

  renderTagWithExpression(view, 'input', expression, config, opts);
};

/**
 * @memberof bs-input
 * @description 渲染单选框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} value
 * @param {object} [opts] 
 */
input.radio = function (view, expression, value, opts) {
  var config = {};
  config['type'] = 'radio';
  config[constants.TAG_ATTR_CLASS] = 'form-check-input';

  if (!utils.isNullOrUndefined(value)) {
    config['value'] = value;
  }

  renderTagWithExpression(view, 'input', expression, config, opts);
};

/**
 * @memberof bs-input
 * @description 渲染复选框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} value
 * @param {object} [opts] 
 */
input.checkbox = function (view, expression, value, opts) {
  var config = {};
  config['type'] = 'checkbox';
  config[constants.TAG_ATTR_CLASS] = 'form-check-input';

  if (!utils.isNullOrUndefined(value)) {
    config['value'] = value;
  }

  renderTagWithExpression(view, 'input', expression, config, opts);
};

/**
 * @memberof bs-input
 * @description 渲染文件框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {object} [opts] 
 */
input.file = function (view, expression, opts) {
  var config = {};
  config['type'] = 'file';
  config[constants.TAG_ATTR_CLASS] = 'form-control-file';

  renderTagWithExpression(view, 'input', expression, config, opts);
};

/**
 * @memberof bs-input
 * @description 渲染颜色选择器
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {object} [opts] 
 */
input.color = function (view, expression, opts) {
  var config = {};
  config['type'] = 'color';

  renderTagWithExpression(view, 'input', expression, config, opts);
};

/**
 * @memberof bs-input
 * @description 渲染滑动条
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {object} [opts] 
 */
input.range = function (view, expression, opts) {
  var config = {};
  config['type'] = 'range';
  config[constants.TAG_ATTR_CLASS] = 'form-control-range';

  renderTagWithExpression(view, 'input', expression, config, opts);
};

/**
 * @memberof bs-input
 * @description 渲染日期输入框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {object} [opts] 
 */
input.date = function (view, expression, opts) {
  var config = {};
  config['type'] = 'date';
  config[constants.TAG_ATTR_CLASS] = 'form-control';

  renderTagWithExpression(view, 'input', expression, config, opts);
};

/**
 * @memberof bs-input
 * @description 渲染日期输入框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {object} [opts] 
 */
input.datetime = function (view, expression, opts) {
  var config = {};
  config['type'] = 'datetime';
  config[constants.TAG_ATTR_CLASS] = 'form-control';

  renderTagWithExpression(view, 'input', expression, config, opts);
};

/**
 * @memberof bs-input
 * @description 渲染日期输入框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {object} [opts] 
 */
input.datetimeLocal = function (view, expression, opts) {
  var config = {};
  config['type'] = 'datetime-local';
  config[constants.TAG_ATTR_CLASS] = 'form-control';

  renderTagWithExpression(view, 'input', expression, config, opts);
};

/**
 * @memberof bs-input
 * @description 渲染日期输入框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {object} [opts] 
 */
input.month = function (view, expression, opts) {
  var config = {};
  config['type'] = 'month';
  config[constants.TAG_ATTR_CLASS] = 'form-control';

  renderTagWithExpression(view, 'input', expression, config, opts);
};

/**
 * @memberof bs-input
 * @description 渲染日期输入框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {object} [opts] 
 */
input.time = function (view, expression, opts) {
  var config = {};
  config['type'] = 'time';
  config[constants.TAG_ATTR_CLASS] = 'form-control';

  renderTagWithExpression(view, 'input', expression, config, opts);
};

/**
 * @memberof bs-input
 * @description 渲染日期输入框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {object} [opts] 
 */
input.week = function (view, expression, opts) {
  var config = {};
  config['type'] = 'week';
  config[constants.TAG_ATTR_CLASS] = 'form-control';

  renderTagWithExpression(view, 'input', expression, config, opts);
};

/**
 * @memberof bs-input
 * @description 渲染单选框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} value
 * @param {object} [opts] 
 */
input.customRadio = function (view, expression, value, opts) {
  var config = {};
  config['type'] = 'radio';
  config[constants.TAG_ATTR_CLASS] = 'custom-control-input';

  if (!utils.isNullOrUndefined(value)) {
    config['value'] = value;
  }

  renderTagWithExpression(view, 'input', expression, config, opts);
};

/**
 * @memberof bs-input
 * @description 渲染复选框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {string} value
 * @param {object} [opts] 
 */
input.customCheckbox = function (view, expression, value, opts) {
  var config = {};
  config['type'] = 'checkbox';
  config[constants.TAG_ATTR_CLASS] = 'custom-control-input';

  if (!utils.isNullOrUndefined(value)) {
    config['value'] = value;
  }

  renderTagWithExpression(view, 'input', expression, config, opts);
};

/**
 * @memberof bs-input
 * @description 渲染文件框
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {object} [opts] 
 */
input.customFile = function (view, expression, opts) {
  var config = {};
  config['type'] = 'file';
  config[constants.TAG_ATTR_CLASS] = 'custom-file-input';

  renderTagWithExpression(view, 'input', expression, config, opts);
};

/**
 * @memberof bs-input
 * @description 渲染滑动条
 * @param {View} view
 * @param {(string|Array)} expression 
 * @param {object} [opts] 
 */
input.customRange = function (view, expression, opts) {
  var config = {};
  config['type'] = 'range';
  config[constants.TAG_ATTR_CLASS] = 'custom-range';

  renderTagWithExpression(view, 'input', expression, config, opts);
};

