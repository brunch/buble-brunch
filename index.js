'use strict';

const buble = require('buble');

class BrunchBuble {
	compile(file) {
		return Promise.resolve(
			buble.transform(file)
		);
	}
}

BrunchBuble.prototype.brunchPlugin = true;
BrunchBuble.prototype.type = 'javascript';
BrunchBuble.prototype.extension = 'js';
BrunchBuble.prototype.pattern = /\.js$/;

module.exports = BrunchBuble;
