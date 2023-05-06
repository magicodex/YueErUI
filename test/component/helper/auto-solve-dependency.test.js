"use strict";

var assert = require('assert');
var autoSolveDependency = require('../../../component/helper/auto-solve-dependency');
var View = require('../../../lib/view');

describe('autoSolveDependency', function () {

  describe('test', function () {
    it('case 1', function () {
      var view = new View();
      var callFlag = false;

      var renderFn = function () {
        callFlag = true;
      };
      renderFn.styles = ['core.css'];

      var proxyFn = autoSolveDependency(renderFn);
      // 调用代理类
      proxyFn(view);

      assert.ok(view._htmlStyles._urlIndexes['core.css'] != null);
      assert.equal(callFlag, true);
    });
  });

});
