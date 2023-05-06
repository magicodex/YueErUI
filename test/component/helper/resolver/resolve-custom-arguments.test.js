"use strict";

var assert = require('assert');
var resolveCustomArguments = require('../../../../component/helper/resolver/resolve-custom-arguments');
var resolvedResultConstants = require('../../../../component/helper/resolver/resolved-result-constants');

describe('resolveCustomArguments', function () {

  describe('test', function () {
    it('case 1', function () {
      var actual = resolveCustomArguments([null, null, '##btn', 'Hello, world!', {}]);

      assert.equal(actual.view, null);
      assert.equal(actual.tagName, null);
      assert.equal(actual[resolvedResultConstants.UI_NAME], 'btn');
      assert.equal(actual[resolvedResultConstants.INNER_HTML], 'Hello, world!');
      assert.deepEqual(actual.options, {});
    });
  });

  describe('#getExpressionFromArguments()', function () {
    // 3 个参数
    it('case 1', function () {
      var func = resolveCustomArguments.privateFn.getExpressionFromArguments;

      assert.equal(func([null, null, '#btn']), '#btn');
      assert.equal(func([null, null, 'btn']), null);
      assert.deepEqual(func([null, null, ['#btn']]), ['#btn']);
      assert.deepEqual(func([null, null, { 'key1': 'value1' }]), null);
    });
  });

  describe('#getInnerHtmlOrInnerHtmlFnFromArguments()', function () {
    // 3 个参数
    it('case 1', function () {
      var func = resolveCustomArguments.privateFn.getInnerHtmlOrInnerHtmlFnFromArguments;

      var innerHtmlFn = function () { };
      assert.equal(func([null, null, '#btn']), null);
      assert.equal(func([null, null, 'btn']), 'btn');
      assert.equal(func([null, null, innerHtmlFn]), innerHtmlFn);
      assert.equal(func([null, null, ['#btn']]), null);
      assert.deepEqual(func([null, null, { 'key1': 'value1' }]), null);
    });

    // 4 个参数
    it('case 2', function () {
      var func = resolveCustomArguments.privateFn.getInnerHtmlOrInnerHtmlFnFromArguments;

      var innerHtmlFn = function () { };
      assert.equal(func([null, null, '#btn', null]), null);
      assert.equal(func([null, null, null, 'btn']), 'btn');
      assert.equal(func([null, null, null, innerHtmlFn]), innerHtmlFn);
      assert.equal(func([null, null, ['#btn'], null]), null);
      assert.deepEqual(func([null, null, null, { 'key1': 'value1' }]), null);
    });
  });

  describe('#getOptionsFromArguments()', function () {
    // 3 个参数
    it('case 1', function () {
      var func = resolveCustomArguments.privateFn.getOptionsFromArguments;
      var opts = { 'key1': 'value1' };

      assert.deepEqual(func([null, null, opts]), opts);
      assert.deepEqual(func([null, null, '#btn']), null);
    });

    // 4 个参数
    it('case 1', function () {
      var func = resolveCustomArguments.privateFn.getOptionsFromArguments;
      var opts = { 'key1': 'value1' };

      assert.deepEqual(func([null, null, null, opts]), opts);
      assert.equal(func([null, null, '#btn', null]), null);
    });
  });

  describe('#isExpressionArgument()', function () {
    it('case 1', function () {
      var func = resolveCustomArguments.privateFn.isExpressionArgument;

      assert.equal(func({ 'key1': 'value1' }), false);
      assert.equal(func([1]), true);
      assert.equal(func(function () { }), false);
      assert.equal(func(null), true);
      assert.equal(func('1'), false);
      assert.equal(func('#1'), true);
    });
  });

  describe('#isInnerHtmlOrInnerHtmlFnArgument()', function () {
    it('case 1', function () {
      var func = resolveCustomArguments.privateFn.isInnerHtmlOrInnerHtmlFnArgument;

      assert.equal(func({ 'key1': 'value1' }), false);
      assert.equal(func([1]), false);
      assert.equal(func(function () { }), true);
      assert.equal(func(null), true);
      assert.equal(func('1'), true);
      assert.equal(func('#1'), false);
    });
  });

  describe('#isOptionsArgument()', function () {
    it('case 1', function () {
      var func = resolveCustomArguments.privateFn.isOptionsArgument;

      assert.equal(func({ 'key1': 'value1' }), true);
      assert.equal(func([1]), false);
      assert.equal(func(function () { }), false);
      assert.equal(func(null), true);
      assert.equal(func('1'), false);
      assert.equal(func('#1'), false);
    });
  });

});
