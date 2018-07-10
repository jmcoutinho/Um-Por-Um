function rotateSpreads() {
    var spreads = document.getElementsByClassName('spread');
    
    for (i = 0; i < spreads.length; i++) {
        var rotation = (Math.random()*5)-2.5;
        spreads[i].style.transform = 'rotate(' + rotation + 'deg)';
    }
}

function positionLogo() {
    var logoShapes = document.getElementsByClassName('logo-shape');
    
    for (i = 0; i < logoShapes.length; i++) {
        var b = document.getElementsByTagName('body')[0];
        var bodyX = b.clientWidth;
        var bodyY = b.clientHeight;
        
        var rotation = (Math.random()*90)-45;
        var arrangement = Math.floor(Math.random()*4)-2;
        var placeX = Math.random()*(bodyX - logoShapes[i].getBoundingClientRect().width);
        var placeY = Math.random()*(bodyY - logoShapes[i].getBoundingClientRect().height);
        
        logoShapes[i].style.left = placeX + 'px';
        logoShapes[i].style.top = placeY + 'px';
        logoShapes[i].style.transform = 'rotate(' + rotation + 'deg)';
        logoShapes[i].style.zIndex = 10 + arrangement;
    }
}

/*from w3schools*/
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

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

rotateSpreads(); positionLogo();
for (i = 0; i < document.getElementsByClassName('logo-shape').length; i++) {
    dragElement(document.getElementsByClassName('logo-shape')[i]);
}