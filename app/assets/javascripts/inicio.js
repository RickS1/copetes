$(document).on("ready page:load",function(){
	$("body").niceScroll({
		cursorwidth: "3px",
		background: "rgba(150,150,150,0.6)",
		cursorcolor: "red"
	});
  $(".op-menu a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
	$(window).trigger("resize");
});

$(window).on("resize",function(){
	void($("#b_wrapper")[0].offsetHeight);
	var w_height = $("#background").height();
	var reels = $(".reel");
	var body_height = window.getComputedStyle($("#b_wrapper")[0], null).getPropertyValue("height");
	console.log(body_height);
	$("#inicio").css({
		height: w_height + "px"
	});
	$("#main-img-w").css({
		height: (w_height - 215) + "px"
	});
	$("#img-main").css({
		height: (w_height - 215) + "px"
	});
	reels.each(function(d){
		reels[d].style.height = body_height + "px";
	});
	$("#bio").css({
		height: w_height + "px"
	});
});
