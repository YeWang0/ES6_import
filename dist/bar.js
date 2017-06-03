'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.B = B;

var _foo = require('./foo.js');

// x().then(y => log(y));
function B() {
	console.log('function B called');
	// 	alert("function B called");
	(0, _foo.A)();
}