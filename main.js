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
    isRequestedDraw = true;
  }
  procEvent();
}

//physics
var tiles=tilelist.length; //number of tiles
var pos; // pos[i] = position of i th tile
var sur; // sur[i] = surface of i th tile={0:back / 1:surface}
var dep; // dep[i] = depth of i th tile
var gra; // gra[i] = graphics of i th tile
var ww; // canvas size
var tileww=[48,72];
var initGame=function(){
  pos =new Array(tiles);
  sur =new Array(tiles);
  tile=new Array(tiles);
  dep =new Array(tiles);
  for(var t=0;t<tiles;t++){
    pos[t]=new Array(2);
    pos[t][0]=Math.floor(Math.random()*ww[0]);
    pos[t][1]=Math.floor(Math.random()*ww[1]);
    sur[t]=0;
    dep[t]=t;
    tile[t]=t;
  }
//  shuffle(tile);
}

//draw -------------------
var frameRate=60;
var isRequestedDraw=true;
var can;
var ctx;
var initDraw=function(){
  gra = new Array(tiles);
  for(var t=0;t<tiles;t++){
    gra[t] = new Image();
    gra[t].src = tilelist[t][0] + "?" + new Date().getTime();  //renderer
  }  
  can = document.getElementById("canvas");
  if(!can||!can.getContext) return false;
  ctx = can.getContext('2d');
  ww=[can.width, can.height];
}
var procDraw=function(){
  for(var t=0;t<tiles;t++){
    if(gra[t].complete){
      ctx.drawImage(gra[t], 
                           0,        0,
                    tileww[0],tileww[1], 
                    pos[t][0],pos[t][1],
                    tileww[0],tileww[1]);
    };
  
  }
}
//init event---------------------
var initEvent = function(){
  eventQueue = new Array(0);
/*  canvas[0].ontouchstart = addTouchEvent;
  canvas[0].ontouchmove  = addTouchEvent;
  canvas[0].ontouchend   = addTouchEvent;
  canvas[0].onmousedown  = addEvent;
  canvas[0].onmousemove  = addEvent;
  canvas[0].onmouseup    = addEvent;
  canvas[0].onmouseout   = addEvent;
  canvas[0].onmousewheel = addEvent; */
//  window.onkeydown       = addEvent;
};


