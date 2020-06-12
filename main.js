const first = document.querySelector('#number1');
const result = document.querySelector('.result');
let worker = [];
let count = 0;
let errCount = 0;

alert("浏览器支持" +window.navigator.hardwareConcurrency+"线程");
if (window.Worker) {
  
  for (let i=0;i<8;i++){
    console.log(worker[i]);
    worker[i] = new Worker("worker.js");
    if (typeof(worker[i])=="object") {
      worker[i].onmessage = function(e) {
        console.log(e.data+"-"+i);
        count = String(e.data).indexOf("Result")>-1?count+1:count;
        if (count==worker.length){
          count=0;
          alert("worker end__worker="+worker.length+"__err="+errCount);
        }
      };
      worker[i].onerror = function(e) {
        errCount++;
        alert("err" + e.data + "-" + i);
        console.log("err" + e.data + "-" + i);
        count++;
        worker.splice(i,1);
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
