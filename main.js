const first = document.querySelector('#number1');
const result = document.querySelector('.result');
let worker = [];
if (window.Worker) {
  
  for (let i=0;i<5;i++){
    worker[i] = new Worker("worker.js");
    if (worker[i]) {
      worker[i].onmessage = function(e) {
        console.log(e.data+"-"+i);
      };
    }
    else {
      worker.length--;
      break;
    } 
  }
	
	first.onchange = function() {
	  for(let i=worker.length-1; i>=0;i--){
	    worker[i].postMessage([first.value, first.value]);
	  }
	  console.log('Message posted to worker');
	};


} else {
	console.log('Your browser doesn\'t support web workers.')
}
