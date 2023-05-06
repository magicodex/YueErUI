
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
  // 新的一行
  grid.rowNew();

  grid.colNewSm(3);
  bs.input.text(view, '#text', 'Input text...');
  grid.colNewSm(3);
  bs.input.password(view, '#password', 'Input password...');
  grid.colNewSm(3);
  bs.input.number(view, '#number', 'Input number...');
  grid.colNewSm(3);
  bs.input.email(view, '#email', 'Input email...');

  // 新的一行
  view.br();
  grid.rowNew();

  grid.colNewSm(3);
  bs.input.url(view, '#url', 'Input url...');
  grid.colNewSm(3);
  bs.input.search(view, '#search', 'Input search...');
  grid.colNewSm(3);
  bs.input.tel(view, '#tel', 'Input tel...');

  // 新的一行
  view.br();
  grid.rowNew();

  grid.colNewSm(3);
  bs.input.button(view, '#button', 'button');
  grid.colNewSm(3);
  bs.input.submit(view, '#submit', 'submit');
  grid.colNewSm(3);
  bs.input.reset(view, '#reset', 'reset');

  // 新的一行
  view.br(2);
  grid.rowNew();

  grid.colNewSm(3);
  bs.input.file(view, '#file');
  grid.colNewSm(3);
  bs.input.color(view, '#color');
  grid.colNewSm(3);
  bs.input.range(view, '#range');

  // 新的一行
  view.br();
  grid.rowNew();

  grid.colNewSm(3);
  bs.input.date(view, '#date');
  grid.colNewSm(3);
  bs.input.datetime(view, '#datetime');
  grid.colNewSm(3);
  bs.input.datetimeLocal(view, '#datetimeLocal');
  grid.colNewSm(3);
  bs.input.month(view, '#month');

  // 新的一行
  view.br();
  grid.rowNew();

  grid.colNewSm(3);
  bs.input.time(view, '#time');
  grid.colNewSm(3);
  bs.input.week(view, '#week');
}, {
  style: 'margin-top: 15px'
});

var writer = new StringWriter();
view.renderToString(writer);
console.info(writer.getString());
