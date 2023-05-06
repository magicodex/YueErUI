"use strict";

var assert = require('assert');
var textarea = require('../../../../../component/bootstrap/form/textarea/textarea');
var View = require('../../../../../lib/view');

describe('textarea', function () {

  describe('#defaultTextarea()', function () {
    it('case 1', function () {
      var view = new View();
      textarea.defaultTextarea(view, '#chatContent', 'Input content...', {
        value: 'Hello, world!'
      });

      var body = view.getHtmlBody();
      var actual = body.getString();
      var expected = '<textarea class="form-control" placeholder="Input content..."' +
        ' id="chatContent" value="Hello, world!">\n</textarea>\n';

      assert.equal(actual, expected);
    });
  });

});
