"use strict";

var assert = require('assert');
var Tag = require('../../../../component/helper/tag/tag');
var StringWriter = require('../../../../lib/writer/string-writer');

describe('Tag', function () {

  describe('#writeStartTag()', function () {
    it('case 1', function () {
      var tag = new Tag('meta', { charset: 'UTF-8' });
      var writer = new StringWriter();
      tag.writeStartTag(writer, '>');

      assert.equal(writer.getString(), '<meta charset="UTF-8">');
    });

    it('case 2', function () {
      var tag = new Tag('br');
      var writer = new StringWriter();
      // 自闭合标签
      tag.writeStartTag(writer, '/>');

      assert.equal(writer.getString(), '<br/>');
    });
  });

  describe('#writeEndTag()', function () {
    it('case 1', function () {
      var tag = new Tag('p', {});
      var writer = new StringWriter();
      tag.writeEndTag(writer);

      assert.equal(writer.getString(), '</p>');
    });
  });

});
