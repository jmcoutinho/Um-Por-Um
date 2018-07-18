window.onload = function() {
    responseRotate();
    $(window).resize(responseRotate);
	
	positionLogo();
	
	$(".logo-shape").each(function (index, element) {
		dragElement(element);
	});
	
    $(".revealer").click(function () {
        $(this).parent().css('overflow-x', 'scroll');
        $(this).hide();
        $(this).siblings('.revealed').show();
        $(this).siblings('.hider').show();
        return false;
    });

    $(".hider").click(function () {
        $(this).parent().css('overflow-x', 'visible');
        $(this).hide();
        $(this).siblings('.revealed').hide();
        $(this).siblings('.revealer').show();
        return false;
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

/*from w3schools*/
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}