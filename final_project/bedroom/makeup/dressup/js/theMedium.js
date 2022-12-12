$(".p4").hide();
		
$(".top img").click(function(){
	$(".clothing").show();
	$(".p4").hide();
	$(".p2").hide();
	var imgpath = $(this).attr("src");
	$("#top").attr("src",imgpath)
})
	
$(".dress img").click(function(){
	$(".clothing").show();
	$(".p4").hide();
	$(".p2").hide();
	var imgpath = $(this).attr("src");
	$("#top").attr("src",imgpath)
	$("#bottom").attr("src",'')
})


$(".bottom img").click(function(){
	$(".clothing").show();
	$(".p4").hide();
	var imgpath = $(this).attr("src");
	$("#bottom").attr("src",imgpath)
})


$(".shoe img").click(function(){
	$(".clothing").show();
	$(".p4").hide();
	var imgpath = $(this).attr("src");
	$("#shoe").attr("src",imgpath)
})

$(".set img").click(function(){
	$(".p4").show();
	$(".clothing").hide();
	var imgpath = $(this).attr("src");
	$("#set").attr("src",imgpath)
})

var bg = ["background/1.JPG","background/2.JPG","background/3.JPG","background/4.JPG","background/5.JPG","background/6.JPG"];
var bgnum = 0;
$(".left_show").css("background-image","url(" +bg[bgnum]+ ")");
$("#autoBackground").click(function(){
	bgnum++
	if(bgnum > 5){
		bgnum = 0;
	}
	$(".left_show").css("background-image","url(" +bg[bgnum]+ ")");
})

function takeshot() {
	let div = document.getElementById('takescreenshot');

   
	html2canvas(div).then(
	 function (canvas) {
	  document.getElementById('output').appendChild(canvas);
	 })

}

$("#boy").hide();

$("#ready").click(function(){
	$(".right_item").hide();

	$("body").css("background-image", "url('img/cinema.png')")
	$(".left_show").css("background-image","url('img/transparent.png')");
	$(".content").css("background-color","transparent");
	$("body").css("background-repeat", "no-repeat")
	$("body").css("background-size", "cover")
	$("#boy").show();


	$('button').hide();
})


