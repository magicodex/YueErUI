"use strict";

var assert = require('assert');
var renderTextareaTag = require('../../../../../../component/bootstrap/core/renderer/form/render-textarea-tag');
var View = require('../../../../../../lib/view');

describe('renderTextareaTag', function () {

  describe('test', function () {
    it('case 1', function () {
      var config = {
        class: 'form-control'
      };

      var view = new View();
      renderTextareaTag(view, '#content', config, 'Input content...', {
        value: 'Hello, world!'
      });

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = '<textarea class="form-control" placeholder="Input content..."' +
        ' id="content" value="Hello, world!">\n</textarea>\n';

      assert.equal(actual, expected);
    });
  });

});
