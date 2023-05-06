"use strict";

var assert = require('assert');
var utils = require('../../lib/utils');

describe('utils', function () {

  describe('#isString()', function () {
    it('case 1', function () {
      assert.equal(utils.isString('Hello, world!'), true);
    });

    it('case 2', function () {
      assert.equal(utils.isString(null), false);
    });

    it('case 3', function () {
      assert.equal(utils.isString(undefined), false);
    });

    it('case 4', function () {
      assert.equal(utils.isString(1), false);
    });
  });

  describe('#isNumber()', function () {
    it('case 1', function () {
      assert.equal(utils.isNumber('Hello, world!'), false);
    });

    it('case 2', function () {
      assert.equal(utils.isNumber(null), false);
    });

    it('case 3', function () {
      assert.equal(utils.isNumber(undefined), false);
    });

    it('case 4', function () {
      assert.equal(utils.isNumber(1), true);
    });
  });

  describe('#isObject()', function () {
    it('case 1', function () {
      assert.equal(utils.isObject({}), true);
    });

    it('case 2', function () {
      assert.equal(utils.isObject('Hello, world!'), false);
    });

    // null 也是对象类型
    it('case 3', function () {
      assert.equal(utils.isObject(null), true);
    });

    it('case 4', function () {
      assert.equal(utils.isObject(undefined), false);
    });
  });

  describe('#isFunction()', function () {
    it('case 1', function () {
      assert.equal(utils.isFunction(String), true);
    });

    it('case 2', function () {
      assert.equal(utils.isFunction('String'), false);
    });

    it('case 3', function () {
      assert.equal(utils.isFunction(null), false);
    });

    it('case 4', function () {
      assert.equal(utils.isFunction(undefined), false);
    });
  });

  describe('#isNullOrUndefined()', function () {
    it('case 1', function () {
      assert.equal(utils.isNullOrUndefined('Hello, world!'), false);
    });

    it('case 2', function () {
      assert.equal(utils.isNullOrUndefined(null), true);
    });

    it('case 3', function () {
      assert.equal(utils.isNullOrUndefined(undefined), true);
    });
  });

  describe('#isNotEmptyString()', function () {
    it('case 1', function () {
      assert.equal(utils.isNotEmptyString('Hello, world!'), true);
    });

    it('case 2', function () {
      assert.equal(utils.isNotEmptyString(null), false);
    });

    it('case 3', function () {
      assert.equal(utils.isNotEmptyString(undefined), false);
    });
  });

  describe('#isNotEmptyObject()', function () {
    it('case 1', function () {
      assert.equal(utils.isNotEmptyObject({ key1: 'value1' }), true);
      assert.equal(utils.isNotEmptyObject({}), false);
    });

    it('case 2', function () {
      assert.equal(utils.isNotEmptyObject('Hello, world!'), false);
    });

    it('case 3', function () {
      assert.equal(utils.isNotEmptyObject(null), false);
    });
  });

  describe('#emptyStringIfNullOrUndefined()', function () {
    it('case 1', function () {
      assert.equal(utils.emptyStringIfNullOrUndefined('one'), 'one');
    });

    it('case 2', function () {
      assert.equal(utils.emptyStringIfNullOrUndefined(null), '');
    });

    it('case 3', function () {
      assert.equal(utils.emptyStringIfNullOrUndefined(undefined), '');
    });
  });

  describe('#emptyArrayIfNullOrUndefined()', function () {
    it('case 1', function () {
      assert.deepEqual(utils.emptyArrayIfNullOrUndefined(['one'], 'two'), ['one']);
    });

    it('case 2', function () {
      assert.deepEqual(utils.emptyArrayIfNullOrUndefined(null, 'two'), []);
    });

    it('case 3', function () {
      assert.deepEqual(utils.emptyArrayIfNullOrUndefined(undefined, 'two'), []);
    });
  });

  describe('#emptyObjectIfNullOrUndefined()', function () {
    it('case 1', function () {
      assert.deepEqual(utils.emptyObjectIfNullOrUndefined({ 'key1': 'value' }, 'two'), { 'key1': 'value' });
    });

    it('case 2', function () {
      assert.deepEqual(utils.emptyObjectIfNullOrUndefined(null, 'two'), {});
    });

    it('case 3', function () {
      assert.deepEqual(utils.emptyObjectIfNullOrUndefined(undefined, 'two'), {});
    });
  });

  describe('#convertToString()', function () {
    it('case 1', function () {
      assert.equal(utils.convertToString(1), '1');
    });

    it('case 2', function () {
      assert.equal(utils.convertToString('1'), '1');
    });

    // 不把 null 转换成字符串
    it('case 3', function () {
      assert.equal(utils.convertToString(null), null);
    });

    // 不把 undefined 转换成字符串
    it('case 4', function () {
      assert.equal(utils.convertToString(undefined), undefined);
    });
  });

  describe('#formatString()', function () {
    it('case 1', function () {
      assert.equal(utils.formatString('Hello, {0}!', ['world']), 'Hello, world!');
    });

    it('case 2', function () {
      assert.equal(utils.formatString('Hello, world!', []), 'Hello, world!');
    });
  });

  describe('#concatObjects()', function () {
    it('case 1', function () {
      var obj1 = { key1: 'value1', key3: 'value3' };
      var obj2 = { key2: 'value2' };
      var actual = utils.concatObjects([obj1, obj2]);
      var expected = { key1: 'value1', key3: 'value3', key2: 'value2' };

      assert.deepEqual(expected, actual);
    });

    it('case 2', function () {
      var actual = utils.concatObjects([{}]);

      assert.deepEqual(actual, {});
    });
  });

});
