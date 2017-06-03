import {A} from './foo.js'
// x().then(y => log(y));
export function B(){
	console.log('function B called');
// 	alert("function B called");
	A();
}