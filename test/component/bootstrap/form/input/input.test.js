"use strict";

var assert = require('assert');
var input = require('../../../../../component/bootstrap/form/input/input');
var View = require('../../../../../lib/view');

describe('input', function () {

  describe('#text()', function () {
    it('case 1', function () {
      var view = new View();
      input.text(view, '#user');

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = [
        '<input type="text" class="form-control" id="user"/>\n'
      ].join('\n');

      assert.equal(actual, expected);
    });
  });

});
