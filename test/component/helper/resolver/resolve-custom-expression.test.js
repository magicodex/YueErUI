"use strict";

var assert = require('assert');
var resolveCustomExpression = require('../../../../component/helper/resolver/resolve-custom-expression');
var resolveResultConstants = require('../../../../component/helper/resolver/resolve-result-constants');

describe('resolveCustomExpression', function () {

  describe('test', function () {
    // 标签 ID 属性
    it('case 1', function () {
      var actual = resolveCustomExpression('#btn1');

      assert.equal(actual[resolveResultConstants.TAG_ID_ATTR], 'btn1');
    });

    // 标签 name 属性
    it('case 2', function () {
      var actual = resolveCustomExpression('$remark');

      assert.equal(actual[resolveResultConstants.TAG_NAME_ATTR], 'remark');
    });

    // 标签 class 属性
    it('case 3', function () {
      var actual = resolveCustomExpression('@btn-primary');

      assert.equal(actual[resolveResultConstants.TAG_CLASS_ATTR], 'btn-primary');
    });

    // 组件 uiName 参数
    it('case 4', function () {
      var actual = resolveCustomExpression('##btn1');

      assert.equal(actual[resolveResultConstants.UI_NAME], 'btn1');
    });

    // 组件 dataName 参数
    it('case 5', function () {
      var actual = resolveCustomExpression('$$remark');

      assert.equal(actual[resolveResultConstants.DATA_NAME], 'remark');
    });

    // 组件 componentType 参数
    it('case 6', function () {
      var actual = resolveCustomExpression('@@btn-primary');

      assert.equal(actual[resolveResultConstants.COMPONENT_TYPE], 'btn-primary');
    });

    // 参数是数组的情况
    it('case 7', function () {
      var actual = resolveCustomExpression(['##btn1', '$$remark', '@btn-primary', '$$remark2']);

      assert.equal(actual[resolveResultConstants.UI_NAME], 'btn1');
      assert.equal(actual[resolveResultConstants.DATA_NAME], 'remark');
      assert.equal(actual[resolveResultConstants.TAG_CLASS_ATTR], 'btn-primary');
    });
  });

});
