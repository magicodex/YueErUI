"use strict";

var assert = require('assert');
var ViewDependencySolver = require('../../lib/view-dependency-solver');
var View = require('../../lib/view');

describe('ViewDependencySolver', function () {

  describe('#solveDependency()', function () {
    it('case 1', function () {
      var view = new View();
      var solver = new ViewDependencySolver({
        dependencies: {
          button1: {
            styles: ['button1.css'],
            scripts: ['button1.js']
          },
          button2: {
            dependencies: ['button1']
          }
        }
      });

      solver.solveDependency(view, {
        styles: ['style1.css', 'style2.css'],
        scripts: ['script1.js'],
        dependencies: ['button2']
      });

      assert.deepEqual(view._htmlStyles._htmlStrings,
        ['<link rel="stylesheet" href="button1.css">',
          '<link rel="stylesheet" href="style1.css">',
          '<link rel="stylesheet" href="style2.css">']);
      assert.deepEqual(view._htmlScripts._htmlStrings,
        ['<script src="button1.js"></script>',
          '<script src="script1.js"></script>']);
    });

    // 若没找到依赖会报错
    it('case 2', function () {
      var view = new View();
      var solver = new ViewDependencySolver({});

      assert.throws(function () {
        solver.solveDependency(view, {
          styles: ['style1.css', 'style2.css'],
          scripts: ['script1.js'],
          dependencies: ['button2']
        });
      });
    });
  });

});
