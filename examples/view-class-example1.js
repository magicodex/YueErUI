
var View = require('../lib/view');
var StringWriter = require('../lib/writer/string-writer');

var view = new View();
view.title('YueErJS');
view.appendBody('<h1>Hello, world!</h1>');

// 渲染成 HTML 字符串
var writer = new StringWriter();
view.renderToString(writer);

var html = writer.getString();
console.info('>>>>>>>>>> HTML代码 >>>>>>>>>>\n' + html +
  '\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');

