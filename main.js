window.onload=function(){ //entry point
  initDraw();
  initGame();
  initEvent();
  setInterval(procAll, 1000/frameRate);
};

var procAll=function(){ //main loop
  var comp=false;
  if(isRequestedDraw){
    procDraw();
  }
  procEvent();
}

//physics
var initGame=function(){
}

//draw -------------------
var frameRate=60;
var isRequestedDraw=true;
var can;
var ctx;
var initDraw=function(){
//  gra = new Image();
//  gra.src = tilefile + "?" + new Date().getTime();  //renderer
  can = document.getElementById("canvas");
  if(!can||!can.getContext) return false;
  ctx = can.getContext('2d');
  ww=[can.width, can.height];
}
var procDraw=function(){
  ctx.fillStyle = '#000000'; //black
  ctx.clearRect(0, 0, ww[0]-1, ww[1]-1);
//  if(gra.complete){
//    };
    isRequestedDraw = false;
}
//event---------------------
var isKeyTyping;
var initEvent = function(){
  eventQueue = new Array(0);
  can.ontouchstart = addTouchEvent;
  can.ontouchmove  = addTouchEvent;
  can.ontouchend   = addTouchEvent;
  can.onmousedown  = addEvent;
  can.onmousemove  = addEvent;
  can.onmouseup    = addEvent;
  can.onmouseout   = addEvent;
//  can.onmousewheel = addEvent;
//  window.onkeydown       = addEvent;
};

var handleMouseDown = function(){
  //seek pressed tile
//    var l=[mouseDownPos[0]-pos[dt][0],mouseDownPos[1]-pos[dt][1]];
  isRequestedDraw = true;
}
var handleMouseDragging = function(){
  isRequestedDraw = true;
}
var handleMouseUp = function(){
  isRequestedDraw = true;
}

