'use strict';

const buble = require('buble');

class BrunchBuble {
  constructor({ plugins: { buble } }) {
    this.config = buble || {};
  }

  compile({ data }) {
    try {
      const { code } = buble.transform(data, this.config);
      return Promise.resolve(code);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

BrunchBuble.prototype.brunchPlugin = true;
BrunchBuble.prototype.type = 'javascript';
BrunchBuble.prototype.extension = 'js';
BrunchBuble.prototype.pattern = /\.js$/;

module.exports = BrunchBuble;
