//import _ from 'lodash';
import { cube } from './math.js';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import printMe from './print.js';
function component() {
	//var element = document.createElement('div');
	var element = document.createElement('pre');
	var btn = document.createElement('button');

	// element.innerHTML = _.join(['Hello', 'webpack'], '');
	// element.classList.add('hello');
	element.innerHTML = [
		'Hello Judith!' +
		'今天星期'+cube(2)+'\n'
	];

	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;

	var myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);
	element.appendChild(btn);
	console.log(Data);

	return element;
}
//document.body.appendChild(component());
let element = component();
document.body.appendChild(element);
if (module.hot) { 
	module.hot.accept('./print.js',function(){
		console.log('Accept the updated printMe module!');
		document.body.removeChild(element);
		element = component();
		document.body.appendChild(element);
	})
}