function rotateClass(className, rotationMax) {
    var classElements = document.getElementsByClassName(className);
    for (i = 0; i < classElements.length; i++) {
        var rotation = (Math.random() * 2 * rotationMax) - rotationMax;
        classElements[i].style.transform = 'rotate(' + rotation + 'deg)';
    }
}

function positionLogo() {
    var logoShapes = document.getElementsByClassName('logo-shape');
    
    for (i = 0; i < logoShapes.length; i++) {
        var b = document.getElementsByTagName('body')[0];
        var bodyX = b.clientWidth;
        var bodyY = b.clientHeight;
        
        var arrangement = Math.floor(Math.random()*4)-2;
        var placeX = Math.random()*(bodyX - logoShapes[i].getBoundingClientRect().width);
        var placeY = Math.random()*(bodyY - logoShapes[i].getBoundingClientRect().height);
        
        logoShapes[i].style.left = placeX + 'px';
        logoShapes[i].style.top = placeY + 'px';
        logoShapes[i].style.zIndex = 10 + arrangement;
    }
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

var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if(windowWidth < 800) {
    rotateClass('page', 2.5);
} else {
    rotateClass('spread', 2.5);
}
positionLogo();
for (i = 0; i < document.getElementsByClassName('logo-shape').length; i++) {
    dragElement(document.getElementsByClassName('logo-shape')[i]);
}

$('.revealer').click(function () {
    $(this).hide();
    $(this).siblings('.revealed').show();
    $(this).siblings('.hider').show();
    return false;
});

$('.hider').click(function () {
    $(this).hide();
    $(this).siblings('.revealed').hide();
    $(this).siblings('.revealer').show();
    return false;
});