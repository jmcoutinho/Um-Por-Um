window.onload = function() {
	
	$(".draggable-logo").each(function (index, element) {
		$(this).draggable();
	});
	
    responseRotate();
    $(window).resize(responseRotate);
	
	positionLogo();
	
	$(".revealer").click(function () {
		var $this = $(this);
		if($(this).siblings(".revealed").css("display") == "none") {
			$(this).parent().css("overflow-y", "scroll");
			$(this).siblings('.revealed').slideToggle(100);
			setTimeout(function() {
				$this.text("Read less");	
			}, 200);
		} else {
			$(this).text("Read more");
			$(this).siblings(".revealed").hide();
			$(this).parent().css("overflow-y", "visible")
		}
    });

}

function responseRotate(){
    if ($(".spread").css("display") == "block" ){
		rotateClass("spread", 0);
        rotateClass("page", 2.5);
    } else {
		rotateClass("page", 0);
        rotateClass("spread", 2.5);
    }
}

var rpr = [];
$(".page").each(function() {
    rpr.push(Math.random());
});
function rotateClass(className, rotationMax) {
	var i = 0;
	$("." + className).each(function() {
		var rotation = (rpr[i] * 2 * rotationMax) - rotationMax;
		$(this).css("transform", "rotate(" + rotation + "deg)");
		i += 1;
	});
}

function positionLogo() {	
	$(".logo-shape").each(function () {
		
		var posx = (Math.random() * ($(document).width() - $(this).width())).toFixed(),
			posy = (Math.random() * ($(document).height() - $(this).height())).toFixed(),
			posz = (10 + (Math.floor(Math.random() * 4) - 2)).toFixed();
		
		$(this).css({
			'left':posx+'px',
        	'top':posy+'px',
			'z-index':posz
		});
	});
   	rotateClass('logo-shape', 45);
}