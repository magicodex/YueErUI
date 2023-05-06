"use strict";

var assert = require('assert');
var select = require('../../../../../component/bootstrap/form/select/select');
var View = require('../../../../../lib/view');

describe('select', function () {

  describe('#defaultSelect()', function () {
    it('case 1', function () {
      var innerHtmlFn = function (view) {
        view.appendBody('<option value="en-us">English</option>')
      };

      var view = new View();
      select.defaultSelect(view, '#operationCode', innerHtmlFn, {
        required: null
      });

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = [
        '<select class="form-control" id="operationCode" required>',
        '<option value="en-us">English</option>',
        '</select>\n'].join('\n');

      assert.equal(actual, expected);
    });
  });

});
