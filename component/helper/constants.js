"use strict";

var constants = {};

//
// 标签属性
//

// UI名称
constants.TAG_ATTR_UI_NAME = 'data-x-ui';

// 数据名称
constants.TAG_ATTR_DATA_NAME = 'data-x-name';

// 组件类型
constants.TAG_ATTR_COMPONENT_TYPE = 'data-x-type';

// 标签 id 属性
constants.TAG_ATTR_ID = 'id';

// 标签 name 属性
constants.TAG_ATTR_NAME = 'name';

// 标签 class 属性
constants.TAG_ATTR_CLASS = 'class';

//
// 组件参数
//

// UI名称
constants.COMPONENT_PARAM_UI_NAME = '_uiName';

// 数据名称
constants.COMPONENT_PARAM_DATA_NAME = '_dataName';

// 组件类型
constants.COMPONENT_PARAM_COMPONENT_TYPE = '_componentType';

// 起始和结束标签内的 HTML
constants.COMPONENT_PARAM_INNER_HTML = '_innerHtml';

// 起始和结束标签内的 HTML
constants.COMPONENT_PARAM_INNER_HTML_FN = '_innerHtmlFn';

// 自闭合标签
constants.COMPONENT_PARAM_SELF_CLOSING = '_selfClosing';

// 添加类名
constants.COMPONENT_PARAM_APPEND_CLASS = '_appendClass';

module.exports = constants;
