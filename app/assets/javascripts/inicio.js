$(document).on("ready page:load",function(){
	var w_height = $("#background").height();
	$("body").niceScroll({
		cursorwidth: "3px",
		background: "rgba(150,150,150,0.6)",
		cursorcolor: "red"
	});
	$("#inicio").css({
		height: w_height + "px"
	});
	$("#main-img-w").css({
		height: (w_height - 60) + "px"
	});
	$("#image-main").css({
		height: (w_height - 175) + "px"
	});
});
