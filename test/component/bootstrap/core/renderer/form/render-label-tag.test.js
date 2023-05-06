"use strict";

var assert = require('assert');
var renderLabelTag = require('../../../../../../component/bootstrap/core/renderer/form/render-label-tag');
var View = require('../../../../../../lib/view');

describe('renderInputBox', function () {

  describe('test', function () {
    it('case 1', function () {
      var config = {
        class: 'sr-only'
      };

      var view = new View();
      renderLabelTag(view, 'Name:', config, 'nameInput', {
        form: 'form_id'
      });

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = ['<label class="sr-only" for="nameInput" form="form_id">',
        'Name:', '</label>\n'].join('\n');

      assert.equal(actual, expected);
    });
  });

});
