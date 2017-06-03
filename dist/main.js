'use strict';

var _bar = require('./bar.js');

function C() {
	console.log('function C called');
	// 	alert("function C called");
	(0, _bar.B)();
}
C();