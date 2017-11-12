$(document).on("ready page:load",function(){
	UIkit.init();
	$("body").niceScroll({
		cursorwidth: "10px",
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
	$("#menu-list-v").css({width: "0", height: "0"});

	$("#menu-toggle").on("click",function(){
		$("#out-v").css({zIndex: "4"});
		$("#menu-list-v").css({zIndex: "5", width: "", height: "", overflow: "visible"});
		$("#menu-list-v .op-menu").css({opacity: "1"});
		$("#menu-v").css({	
			width: "280px",
			height: "300px",
		});

	$(".vid-link").on("mouseover",function(){
		console.log(this);
	});
});


	$("#out-v").on("click",function(){
		$("#out-v").css({zIndex: "-1"});
		setTimeout(function(){
			$("#menu-list-v").css({zIndex: "-1", width: "0", height: "0", overflow: ""});
			$("#menu-v").css({	
				width: "0px",
				height: "0px"
			});
		}, 500);
		$("#menu-list-v .op-menu").css({opacity: "0"});
	});

	$("#menu-list-v .op-menu").on("click",function(){
		$("#out-v").css({zIndex: "-1"});
		setTimeout(function(){
			$("#menu-list-v").css({zIndex: "-1", width: "0", height: "0", overflow: ""});
			$("#menu-v").css({	
				width: "0px",
				height: "0px"
			});
		}, 500);
		$("#menu-list-v .op-menu").css({opacity: "0"});
	});
	$(window).trigger("resize");
});

$(window).on("scroll",function(){
	var tops = [[$("#bio").offset().top,$("#integrantes").offset().top,"bio"],[$("#integrantes").offset().top,$("#material").offset().top,"integrantes"],[$("#material").offset().top,$("#galeria").offset().top,"material"],[$("#galeria").offset().top,$("#contacto").offset().top,"galeria"],[$("#contacto").offset().top,$(document).height(),"contacto"]];
	var ops = ["bio","integrantes","material","galeria","contacto"];
			for(var j in ops){
				$("#op-"+ops[j])[0].className = $("#op-"+ops[j])[0].className.replace(/ +op-menu-active/,"");
				$("#op-"+ops[j]+"-v")[0].className = $("#op-"+ops[j])[0].className.replace(/ +op-menu-active/,"");
			}
	for(var i in tops){
		var s = $(window).scrollTop();
		if(s >= (tops[i][0] - 95) && s < tops[i][1]){
			if($("#op-"+tops[i][2])[0].className.indexOf("op-menu-active") < 0)
				$("#op-"+tops[i][2])[0].className += " op-menu-active";
			if($("#op-"+tops[i][2]+"-v")[0].className.indexOf("op-menu-active") < 0)
				$("#op-"+tops[i][2]+"-v")[0].className += " op-menu-active";
			break;
		}
	}
});

$(window).on("resize",function(){
	var w_height = $("#background").height();
	var reels = $(".reel"), scraps = $(".scrap-sheet"), grays = $(".pic-gray"), seps = $(".pic-sepia"), pics = $(".photo");
	if($(".uk-modal").css("display") == "block"){
		escalarLightbox();
	}
	$("#menu-list").width(ancho_m);
	//$("#b_wrapper").width($(window).width() - 60);
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
	$("#bio").css({
		minHeight: (w_height-100) + "px"
	});
	$("#integrantes").css({
		minHeight: (w_height-100) + "px",
	});
	$("#material").css({
		minHeight: (w_height-100) + "px"
	});
	$("#galeria").css({
		minHeight: (w_height-100) + "px"
	});
	$("#contacto").css({
		minHeight: (w_height-100) + "px"
	});
	var ops = $("#menu-list .op-menu"), ancho_m = 0;
	var sects = $(".sect"), alto_b = 0;

	setTimeout(function(){
		for(var i in ops){
			ancho_m = ancho_m + $("#"+ops[i].id).outerWidth(true);
		}
		for(var i in sects){
			alto_b = alto_b + $("#"+sects[i].id).outerHeight(true);
		}
		reels.each(function(d){
			reels[d].style.height = alto_b + "px";
		});
	}, 300);
	$(window).trigger("scroll");
});

function escalarLightbox(){
	var ancho_v = Math.max(document.documentElement.clientWidth, window.innerWidth || document.body.ClientWidth || 0);
	console.log(ancho_v);
	var ancho_lightbox = (ancho_v*0.95 > 1390 ? 1390 : ancho_v*0.95)
	var alto_lightbox = ancho_lightbox * 9 / 16;
	console.log(ancho_lightbox + " -- " + alto_lightbox);
	$("iframe").attr("height",alto_lightbox).attr("width",ancho_lightbox).css("height",alto_lightbox+"px");
	$(".uk-modal-dialog-lightbox").css("width", ancho_lightbox +"px");
	$(".uk-modal-dialog-lightbox").css("height",alto_lightbox+"px");
	
}

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
