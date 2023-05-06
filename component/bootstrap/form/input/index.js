"use strict";

var input = require('./input');

module.exports = {
  // 输入框
  text: input.text,
  password: input.password,
  number: input.number,
  email: input.email,
  url: input.url,
  search: input.search,
  tel: input.tel,
  // END 输入框
  // 按钮
  button: input.button,
  submit: input.submit,
  reset: input.reset,
  // END 按钮
  hidden: input.hidden,
  image: input.image,
  radio: input.radio,
  checkbox: input.checkbox,
  file: input.file,
  color: input.color,
  range: input.range,
  // 日期输入框
  date: input.date,
  datetime: input.datetime,
  datetimeLocal: input.datetimeLocal,
  month: input.month,
  time: input.time,
  week: input.week,
  // END 日期输入框
  customRadio: input.customRadio,
  customCheckbox: input.customCheckbox,
  customRange: input.customRange,
  customFile: input.customFile,
  dependencies: {
    'bs.input.text': input.text,
    'bs.input.password': input.password,
    'bs.input.number': input.number,
    'bs.input.email': input.email,
    'bs.input.url': input.url,
    'bs.input.search': input.search,
    'bs.input.tel': input.tel,
    'bs.input.button': input.button,
    'bs.input.submit': input.submit,
    'bs.input.reset': input.reset,
    'bs.input.hidden': input.hidden,
    'bs.input.image': input.image,
    'bs.input.radio': input.radio,
    'bs.input.checkbox': input.checkbox,
    'bs.input.file': input.file,
    'bs.input.color': input.color,
    'bs.input.range': input.range,
    'bs.input.date': input.date,
    'bs.input.datetime': input.datetime,
    'bs.input.datetimeLocal': input.datetimeLocal,
    'bs.input.month': input.month,
    'bs.input.time': input.time,
    'bs.input.week': input.week,
    'bs.input.customRadio': input.customRadio,
    'bs.input.customCheckbox': input.customCheckbox,
    'bs.input.customRange': input.customRange,
    'bs.input.customFile': input.customFile
  }
};
