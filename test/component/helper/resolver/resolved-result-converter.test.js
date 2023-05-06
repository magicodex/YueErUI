"use strict";

var assert = require('assert');
var constants = require('../../../../component/helper/constants');
var resolvedResultConverter = require('../../../../component/helper/resolver/resolved-result-converter');
var resolvedResultConstants = require('../../../../component/helper/resolver/resolved-result-constants');

describe('resolvedResultConverter', function () {

  describe('#convertToTagAttributes()', function () {
    it('case 1', function () {
      var resolvedResult = {};
      resolvedResult[resolvedResultConstants.UI_NAME] = 'accountInputUI';
      resolvedResult[resolvedResultConstants.DATA_NAME] = 'user.account';
      resolvedResult[resolvedResultConstants.COMPONENT_TYPE] = 'text-input';
      resolvedResult[resolvedResultConstants.TAG_ID_ATTR] = 'accountInput';
      resolvedResult[resolvedResultConstants.TAG_NAME_ATTR] = 'account';
      resolvedResult[resolvedResultConstants.TAG_CLASS_ATTR] = 'form-control';

      var tagAttributes = {};
      tagAttributes[constants.TAG_ATTR_UI_NAME] = 'accountInputUI';
      tagAttributes[constants.TAG_ATTR_DATA_NAME] = 'user.account';
      tagAttributes[constants.TAG_ATTR_COMPONENT_TYPE] = 'text-input';
      tagAttributes[constants.TAG_ATTR_ID] = 'accountInput';
      tagAttributes[constants.TAG_ATTR_NAME] = 'account';
      tagAttributes[constants.TAG_ATTR_CLASS] = 'form-control';

      var actual = resolvedResultConverter.convertToTagAttributes(resolvedResult);
      assert.deepEqual(actual, tagAttributes);
    });
  });

});
