"use strict";

var assert = require('assert');
var option = require('../../../../../component/bootstrap/form/select/option');
var View = require('../../../../../lib/view');

describe('option', function () {

  describe('#defaultOption()', function () {
    it('case 1', function () {
      var view = new View();
      option.defaultOption(view, '1001', 'pass');

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = [
        '<option value="1001">',
        'pass', '</option>\n'].join('\n');

      assert.equal(actual, expected);
    });
  });

});
