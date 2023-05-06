# YueErUI
组件化封装 HTML 代码片段。

![明月几时有？](https://s3.bmp.ovh/imgs/2022/09/27/1d1efabc869f8556.png "明月几时有？")

## 安装依赖
```
npm install yueerui
```

## 代码示例

```
var View = require('yueerui').View;
var StringWriter = require('yueerui').StringWriter;

var view = new View();
view.appendHead('<title>YueErUI</title>');
view.appendBody('<h1>Hello, YueErUI!</h1>');

// 渲染成 HTML 字符串
var writer = new StringWriter();
view.renderToString(writer);

var html = writer.getString();
console.info('>>>>>>>>>> HTML代码 >>>>>>>>>>\n' + html +
    '\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');

>>>>>>>>>> HTML代码 >>>>>>>>>>
<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>YueErUI</title>
</head>
<body>
<h1>Hello, YueErUI!</h1>
</body>
</html>
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
```

## 开源协议
MIT
