"use strict";

var assert = require('assert');
var renderInputBox = require('../../../../../../component/bootstrap/core/renderer/form/render-input-box');
var View = require('../../../../../../lib/view');

describe('renderInputBox', function () {

  describe('test', function () {
    it('case 1', function () {
      var config = {
        type: 'text'
      };

      var view = new View();
      renderInputBox(view, '#content', config, 'Input content...', {
        class: 'form-control'
      });

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = ['<input type="text" placeholder="Input content..."' +
        ' id="content" class="form-control"/>\n'].join('\n');

      assert.equal(actual, expected);
    });
  });

});
