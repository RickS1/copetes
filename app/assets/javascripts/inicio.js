$(document).on("ready page:load",function(){
	$("body").niceScroll({
		cursorwidth: "3px",
		background: "rgba(150,150,150,0.6)",
		cursorcolor: "red"
	});
	$(window).trigger("resize");
});

$(window).on("resize",function(){
	var w_height = $("#background").height();
	$("#inicio").css({
		height: w_height + "px"
	});
	$("#main-img-w").css({
		height: (w_height - 215) + "px"
	});
	$("#img-main").css({
		height: (w_height - 215) + "px"
	});
});
