	// var i = 0;
	var nam = null;

	// function timedCount() {
	  // i = i + 1;
	  // postMessage(i);
	  // setTimeout("timedCount()",500);
	// }

	onmessage  = function (e){
		if (e.data =='start'){
			nam = 'John name';
			postMessage(nam);
		}
	
	}
	
	
	// self.addEventListener('message', function(e) {
  // postMessage(x * 2); // Намеренная ошибка. 'x' не определено.
// };
	
	