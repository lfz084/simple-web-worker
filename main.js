const first = document.querySelector('#number1');
const result = document.querySelector('.result');
let worker = [];
let count = 0;
if (window.Worker) {
  
  for (let i=0;i<5;i++){
    console.log(worker[i]);
    worker[i] = new Worker("worker.js");
    if (typeof(worker[i])=="object") {
      worker[i].onmessage = function(e) {
        console.log(e.data+"-"+i);
        count = String(e.data).indexOf("Result")>-1?count+1:count;
        if (count==worker.length){
          count=0;
          alert("worker end");
        }
      };
      worker[i].onerror = function(e) {
        alert("err" + e.data + "-" + i);
        console.log("err" + e.data + "-" + i);
        count++;
      };
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
