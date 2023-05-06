
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

bs.layout.form(view, function (_, layout) {
  // 新的一行
  layout.groupNew();

  bs.label.defaultLabel(view, 'Email', 'inputEmail');
  bs.input.text(view, ['#inputEmail', '$email']);

  // 新的一行
  layout.groupNew();

  bs.label.defaultLabel(view, 'Password', 'inputPassword');
  bs.input.password(view, ['#inputPassword', '$password']);

  // 新的一行
  layout.groupNew();

  bs.button.submitBtnPrimary(view, '#signInBtn', 'Sign in');
}, {
  style: 'padding-left:15px; padding-right:15px;'
});

var writer = new StringWriter();
view.renderToString(writer);
console.info(writer.getString());
