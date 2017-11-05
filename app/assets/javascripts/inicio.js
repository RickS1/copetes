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

$(window).on("scroll",function(){
	var tops = [[$("#bio").offset().top,$("#integrantes").offset().top,"bio"],[$("#integrantes").offset().top,$("#material").offset().top,"integrantes"],[$("#material").offset().top,$("#galeria").offset().top,"material"],[$("#galeria").offset().top,$("#contacto").offset().top,"galeria"],[$("#contacto").offset().top,$(document).height(),"contacto"]];
	var ops = ["bio","integrantes","material","galeria","contacto"];
			for(var j in ops){
				$("#op-"+ops[j])[0].className = $("#op-"+ops[j])[0].className.replace(/ +op-menu-active/,"");
			}
	for(var i in tops){
		var s = $(window).scrollTop();
		if(s >= tops[i][0] && s < tops[i][1]){
			if($("#op-"+tops[i][2])[0].className.indexOf("op-menu-active") < 0)
				$("#op-"+tops[i][2])[0].className += " op-menu-active";
			break;
		}
	}
});

$(window).on("resize",function(){
	var w_height = $("#background").height();
	var reels = $(".reel");
	void($("#b_wrapper")[0].offsetHeight);
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
		reels[d].style.height = $(document).height() + "px";
	});
	$("#bio").css({
		minHeight: w_height + "px"
	});
	$("#integrantes").css({
		minHeight: w_height + "px"
	});
	$("#material").css({
		minHeight: w_height + "px"
	});
	$("#galeria").css({
		minHeight: w_height + "px"
	});
	$("#contacto").css({
		minHeight: w_height + "px"
	});
	$(window).trigger("scroll");
	$(window).trigger("load");
});

window.onload = function() {
	if (screen.width < 959) {
		var mvp = document.getElementById('vp');
		mvp.setAttribute('content','width=959');
	}
}
