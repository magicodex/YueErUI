
"use strict";

var html = require('../component/html');
var View = require('../lib/view');
var StringWriter = require('../lib/writer/string-writer');

var view = new View();
html.title(view, 'YueErJS');
html.tag(view, 'h1', 'Hello, world!');
html.br(view);
html.comment(view, 'TODO');

var writer = new StringWriter();
view.renderToString(writer);
console.info(writer.getString());
