text_girl.style.display = "none";
girl.style.display = "none";

text_boy.style.display = "none";
boy.style.display = "none";

// var clock = document.getElementById("clock_mp3");

// function playclock() {
//   clock.play();
// }

// function pauseclock() {
//   clock.pause();
// }

// var telephone = document.getElementById("telephone_mp3");

// function playtelephone() {
//   telephone.play();
// }

// function pauseclock() {
//   telephone.pause();
// }


// $('#clock_mp3').play();
$('#clock_mp3').trigger("play")
$('#telephone_mp3').trigger("pause")

document.getElementById("telephone").style.animationPlayState = "paused";


$('img').click(function () {
	
	if($(this).attr('id') == 'clock') {

		// $('#clock_mp3').pause();
		$('#clock_mp3').trigger("pause");
		

	  	$(this).css("animation-play-state","paused");

	  	text_girl.style.display = "block";
	  	girl.style.display = "block";

	} else if ($(this).attr('id') == 'telephone') {
		$('#telephone_mp3').trigger("pause");
		$(this).css("animation-play-state","paused");
		

		text_boy.style.display = "block";
		boy.style.display = "block";



	}
})

$('div').click(function () {
	
	if($(this).attr('id') == 'text_girl') {

		document.getElementById("telephone").style.animationPlayState = "running";

		$('#telephone_mp3').trigger("play");

	  	text_girl.style.display = "none";
	  	girl.style.display = "none";
		

	} else {
		document.getElementById("telephone").style.animationPlayState = "paused";
	

		
	}

	if($(this).attr('id') == 'text_boy') {
		$("#next").show();
		
	
	} 
})




