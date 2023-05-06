"use strict";

var assert = require('assert');
var constants = require('../../../../component/helper/constants');
var resolveResultConverter = require('../../../../component/helper/resolver/resolve-result-converter');
var resolveResultConstants = require('../../../../component/helper/resolver/resolve-result-constants');

describe('resolveResultConverter', function () {

  describe('#convertToTagAttributes()', function () {
    it('case 1', function () {
      var resolvedResult = {};
      resolvedResult[resolveResultConstants.UI_NAME] = 'accountInputUI';
      resolvedResult[resolveResultConstants.DATA_NAME] = 'user.account';
      resolvedResult[resolveResultConstants.COMPONENT_TYPE] = 'text-input';
      resolvedResult[resolveResultConstants.TAG_ID_ATTR] = 'accountInput';
      resolvedResult[resolveResultConstants.TAG_NAME_ATTR] = 'account';
      resolvedResult[resolveResultConstants.TAG_CLASS_ATTR] = 'form-control';

      var tagAttributes = {};
      tagAttributes[constants.TAG_ATTR_UI_NAME] = 'accountInputUI';
      tagAttributes[constants.TAG_ATTR_DATA_NAME] = 'user.account';
      tagAttributes[constants.TAG_ATTR_COMPONENT_TYPE] = 'text-input';
      tagAttributes[constants.TAG_ATTR_ID] = 'accountInput';
      tagAttributes[constants.TAG_ATTR_NAME] = 'account';
      tagAttributes[constants.TAG_ATTR_CLASS] = 'form-control';

      var actual = resolveResultConverter.convertToTagAttributes(resolvedResult);
      assert.deepEqual(actual, tagAttributes);
    });
  });

});
