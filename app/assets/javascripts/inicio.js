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
	$("#menu-toggle").on("click",function(){
		$("#out-v").css({zIndex: "4"});
		$("#menu-list-v").css({zIndex: "5"});
		$("#menu-list-v .op-menu").css({opacity: "1"});
		$("#menu-v").css({	
			width: "280px",
			height: "300px"
		});
	});

	$("#out-v").on("click",function(){
		$("#out-v").css({zIndex: "-1"});
		$("#menu-list-v").css({zIndex: "-1"});
		$("#menu-list-v .op-menu").css({opacity: "0"});
		$("#menu-v").css({	
			width: "0px",
			height: "0px"
		});
	});

	$("#menu-list-v .op-menu").on("click",function(){
		$("#out-v").css({zIndex: "-1"});
		$("#menu-list-v").css({zIndex: "-1"});
		$("#menu-list-v .op-menu").css({opacity: "0"});
		$("#menu-v").css({	
			width: "0px",
			height: "0px"
		});
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
	var reels = $(".reel"), scraps = $(".scrap-sheet"), grays = $(".pic-gray"), seps = $(".pic-sepia"), pics = $(".photo");
	var ops = ["#op-bio","#op-integrantes","#op-material","#op-galeria","#op-contacto"], ancho_m = 0;
	for(var i in ops){
		ancho_m = ancho_m + $(ops[i]).outerWidth(true);
	}
	$("#menu-list").width(ancho_m);
	$("#b_wrapper").width($(window).width() - 60);
	$("#inicio").css({
		height: w_height + "px"
	});
	$("#main-img-w").css({
		height: (w_height - 200) + "px"
	});
	adjust("#img-main",818,888);

	//Reajuste de fotos Integrantes
	for(var i in scraps){
		adjust($("#"+scraps[i].id),275,350);

		adjust($("#"+pics[i].id),150,150);
		$("#"+pics[i].id).css({
			top: (($("#ps1").height() - $("#"+scraps[i].id).height()) / 2) - ($("#"+scraps[i].id).height() * 0.02),
			left: (($("#ps1").width() - $("#"+scraps[i].id).width()) / 2) - ($("#"+scraps[i].id).width() * ($(window).width() > 870 ? 0.06 : 0.01))
		});

		adjust($("#"+grays[i].id),145,210);
		$("#"+grays[i].id).css({
			top: (($("#ps1").height() - $("#"+scraps[i].id).height()) / 2) + ($("#"+scraps[i].id).height() * 0.08),
			left: (($("#ps1").width() - $("#"+scraps[i].id).width()) / 2) + ($("#"+scraps[i].id).width() * ($(window).width() > 870 ? 0.65 : 0.6))
		});

		adjust($("#"+seps[i].id),265,160);
		$("#"+seps[i].id).css({
			top: (($("#ps1").height() - $("#"+scraps[i].id).height()) / 2) + ($("#"+scraps[i].id).height() * ($(window).width() > 870 ? 0.62 : 0.58)),
			left: (($("#ps1").width() - $("#"+scraps[i].id).width()) / 2) - ($("#"+scraps[i].id).width() * 0.05)
		});
	}
	reels.each(function(d){
		reels[d].style.height = $("#b_wrapper").outerHeight(true) + "px";
	});
	$("#bio").css({
		minHeight: w_height + "px"
	});
	$("#integrantes").css({
		minHeight: w_height + "px",
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
});

function adjust(element,w,h){
	var w_h = $(window).height(), w_w = $(window).width();
	if(w_h < w_w){
		$(element).height("");
		$(element).width($(element).height()*(w/h));
	}
	else{
		$(element).width("");
		$(element).height($(element).width()*(h/w));	
	}	
}
