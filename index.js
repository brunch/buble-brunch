'use strict';

const buble = require('buble');

class BrunchBuble {
  constructor(config) {
    this.config = config && config.plugins && config.plugins.bubleBrunch || {};
  }

  compile(file) {
    try {
      const transform = buble.transform(file.data, this.config);
      return Promise.resolve(transform.code);
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
