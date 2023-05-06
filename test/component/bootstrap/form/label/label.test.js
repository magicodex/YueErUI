"use strict";

var assert = require('assert');
var label = require('../../../../../component/bootstrap/form/label/label');
var View = require('../../../../../lib/view');

describe('label', function () {

  describe('#defaultLabel()', function () {
    it('case 1', function () {
      var view = new View();
      label.defaultLabel(view, 'Name', 'nameInput', {
        form: 'form_id'
      });

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = ['<label for="nameInput" form="form_id">',
        'Name', '</label>\n'].join('\n');

      assert.equal(actual, expected);
    });

    // 3 个参数，第三个参数是 labelFor
    it('case 2', function () {
      var view = new View();
      label.defaultLabel(view, 'Name', 'nameInput');

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = ['<label for="nameInput">',
        'Name', '</label>\n'].join('\n');

      assert.equal(actual, expected);
    });

    // 3 个参数，第三个参数是 opts
    it('case 3', function () {
      var view = new View();
      label.defaultLabel(view, 'Name', {
        form: 'form_id'
      });

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = ['<label form="form_id">',
        'Name', '</label>\n'].join('\n');

      assert.equal(actual, expected);
    });
  });

});
