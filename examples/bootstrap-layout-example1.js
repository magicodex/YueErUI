
"use strict";

var bs = require('../component/bootstrap');
var View = require('../lib/view');
var StringWriter = require('../lib/writer/string-writer');
var ViewDependencySolver = require('../lib/view-dependency-solver');

var viewDependencySolver = new ViewDependencySolver({
  dependencies: bs.dependencies
});
var view = new View({
  viewDependencySolver: viewDependencySolver
});

view.title('YueErJS');
view.addStyle('./bootstrap/css/bootstrap.css');

bs.layout.container(view, function (_, grid) {
  var opts = {
    class: "badge badge-primary text-wrap",
    style: "width: 6rem;"
  };

  // 新的一行
  grid.rowNew();

  grid.colNewMd(3, 6);
  view.tag('div', 'col-sm-6<br>col-md-3', opts);

  grid.colNewMd(3, 6);
  view.tag('div', 'col-sm-6<br>col-md-3', opts);

  grid.colNewMd(3, 6);
  view.tag('div', 'col-sm-6<br>col-md-3', opts);

  grid.colNewMd(3, 6);
  view.tag('div', 'col-sm-6<br>col-md-3', opts);

  // 新的一行
  grid.rowNew();

  grid.colNewMd(3, 6);
  view.tag('div', 'col-sm-6<br>col-md-3', opts);

  grid.colNewMd(3, 6);
  view.tag('div', 'col-sm-6<br>col-md-3', opts);

  grid.colNewMd(3, 6);
  view.tag('div', 'col-sm-6<br>col-md-3', opts);
});

var writer = new StringWriter();
view.renderToString(writer);
console.info(writer.getString());
