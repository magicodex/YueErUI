"use strict";

var assert = require('assert');
var optgroup = require('../../../../../component/bootstrap/form/select/optgroup');
var View = require('../../../../../lib/view');

describe('optgroup', function () {

  describe('#defaultOptgroup()', function () {
    it('case 1', function () {
      var view = new View();
      optgroup.defaultOptgroup(view, 'Swedish Cars', function () {
        view.appendBody('<option value="volvo">Volvo</option>');
      });

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = [
        '<optgroup label="Swedish Cars">',
        '<option value="volvo">Volvo</option>', '</optgroup>\n'].join('\n');

      assert.equal(actual, expected);
    });
  });

});
