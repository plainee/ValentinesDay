
$('document').ready(function(){
	$('#play').click(function(){
		var music=document.getElementById("music");
		if (music.paused) {
			music.play();
        	}
        	else {
            		music.pause();
        	}
	});
});

