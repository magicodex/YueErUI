"use strict";

var button = require('./button');

module.exports = {
  btnPrimary: button.btnPrimary,
  btnSecondary: button.btnSecondary,
  btnSuccess: button.btnSuccess,
  btnDanger: button.btnDanger,
  btnWarning: button.btnWarning,
  btnInfo: button.btnInfo,
  btnLight: button.btnLight,
  btnDark: button.btnDark,
  btnLink: button.btnLink,
  submitBtnPrimary: button.submitBtnPrimary,
  resetBtnPrimary: button.resetBtnPrimary,
  dependencies: {
    'bs.button.btnPrimary': button.btnPrimary,
    'bs.button.btnSecondary': button.btnSecondary,
    'bs.button.btnSuccess': button.btnSuccess,
    'bs.button.btnDanger': button.btnDanger,
    'bs.button.btnWarning': button.btnWarning,
    'bs.button.btnInfo': button.btnInfo,
    'bs.button.btnLight': button.btnLight,
    'bs.button.btnDark': button.btnDark,
    'bs.button.btnLink': button.btnLink,
    'bs.button.submitBtnPrimary': button.submitBtnPrimary,
    'bs.button.resetBtnPrimary': button.resetBtnPrimary
  }
};
