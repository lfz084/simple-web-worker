const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');

if (window.Worker) {
	const myWorker = new Worker("worker.js");
	const myWorker1 = new Worker("worker.js");
const myWorker2 = new Worker("worker.js");
const myWorker3 = new Worker("worker.js");
const myWorker4 = new Worker("worker.js");

	first.onchange = function() {
	  myWorker.postMessage([first.value, second.value]);
 	  myWorker1.postMessage([first.value, second.value]);
	  myWorker2.postMessage([first.value, second.value]);
	  myWorker3.postMessage([first.value, second.value]);
	  myWorker4.postMessage([first.value, second.value]);
	  console.log('Message posted to worker');
	}

	second.onchange = function() {
	  myWorker.postMessage([first.value, second.value]);
	  console.log('Message posted to worker');
	}

	myWorker.onmessage = function(e) {
		//console.log('Message received from worker');
		console.log(e.data);
	}
	myWorker1.onmessage = function(e) {
	  //console.log('Message received from worker');
	  console.log(e.data);
	}
	myWorker2.onmessage = function(e) {
	  //console.log('Message received from worker');
	  console.log(e.data);
	}
	myWorker3.onmessage = function(e) {
	  //console.log('Message received from worker');
	  console.log(e.data);
	}
	myWorker4.onmessage = function(e) {
	  //console.log('Message received from worker');
	  console.log(e.data);
	}
} else {
	console.log('Your browser doesn\'t support web workers.')
}
