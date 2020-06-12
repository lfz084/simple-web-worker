onmessage = function(e) {
 // console.log('Worker: Message received from main script');
  const result = e.data[0] * e.data[1];
  if (isNaN(result)) {
    postMessage('Please write two numbers');
  } else {
    const workerResult = 'Result: ' + result;
    //console.log('Worker: Posting message back to main script');
    for(i=0;i<2;i++){
      let post=(pm(i))();
      //console.log(post);
      post.next();
      post.next();
      for(j=0;j<100000000;j++){
        
      }
    }
    postMessage(workerResult);
  }
}

let pm = function(data){
           let d=data;
           return function* (){
                     yield;
                     postMessage(d);
                  };
         };
