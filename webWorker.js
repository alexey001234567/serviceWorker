	var i = 0;
	var nam = null;

	function timedCount() {
	  i = i + 1;
	  postMessage(i);
	  setTimeout("timedCount()",500);
	}

	function namesd(){
		nam = 'John name';
		postMessage(nam);
	
	}