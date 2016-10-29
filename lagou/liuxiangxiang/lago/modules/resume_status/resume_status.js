var width = document.body.clientWidth;
	window.onresize = function(){
		document.documentElement.style.fontSize = document.body.clientWidth/width * 100 +"%";
	}

