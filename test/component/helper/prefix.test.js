"use strict";

var assert = require('assert');
var prefix = require('../../../component/helper/prefix');

describe('prefix', function () {

  describe('#style()', function () {
    it('case 1', function () {
      var oldStyleUrlPrefix = prefix.styleUrlPrefix;

      try {
        prefix.styleUrlPrefix = '/static/';

        assert.equal(prefix.style('core.css'), '/static/core.css');
      } finally {
        prefix.styleUrlPrefix = oldStyleUrlPrefix;
      }
    });
  });

  describe('#script()', function () {
    it('case 1', function () {
      var oldScriptUrlPrefix = prefix.scriptUrlPrefix;

      try {
        prefix.scriptUrlPrefix = '/static/';

        assert.equal(prefix.script('core.js'), '/static/core.js');
      } finally {
        prefix.scriptUrlPrefix = oldScriptUrlPrefix;
      }
    });
  });

});