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
    isRequestedDraw = false;
  }
  procEvent();
}

//physics
var tiles=tilelist.length; //number of tiles
var pos; // pos[i] = position of i th tile
var sur; // sur[i] = surface of i th tile={0:back / 1:surface}
var dep; // dep[i] = i th depth is dep[i] (0 is top, tiles is bottom)
var gra; // gra[i] = graphics of i th tile
var ww; // canvas size
var initGame=function(){
  pos =new Array(tiles);
  sur =new Array(tiles);
  tile=new Array(tiles);
  dep =new Array(tiles);
  for(var t=0;t<tiles;t++){
    pos[t]=new Array(2);
    pos[t][0]=Math.floor(Math.random()*(ww[0]-tileww[0]));
    pos[t][1]=Math.floor(Math.random()*(ww[1]-tileww[1]));
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
  gra = new Image();
  gra.src = tilefile + "?" + new Date().getTime();  //renderer
  can = document.getElementById("canvas");
  if(!can||!can.getContext) return false;
  ctx = can.getContext('2d');
  ww=[can.width, can.height];
}
var procDraw=function(){
  ctx.fillStyle = '#008800'; //green
  ctx.clearRect(0, 0, ww[0]-1, ww[1]-1);
  if(gra.complete){
    for(var t=tiles-1;t>=0;t--){ // from bottom
      var dt=dep[t]; // convert depth into tile index
      var y0=tileww*tilelist[0][0];
      ctx.drawImage(gra,
         tileww[0]*tilelist[t][0], tileww[1]*tilelist[t][1],
         tileww[0],             tileww[1],
         pos[t][0],             pos[t][1],
         tileww[0],             tileww[1]);
    };
  }
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

var hittile=-1; // index of the hit tile
var hitpos=[-1,-1];// position of hit
var handleMouseDown = function(){
  //seek pressed tile
  for(var t=0;t<tiles;t++){
    var dt=dep[t];
    var l=[mouseDownPos[0]-pos[dt][0],mouseDownPos[1]-pos[dt][1]];
    if(0<l[0] && l[0]<tileww[0] && 
       0<l[1] && l[1]<tileww[1]){
      //hit
      hittile=t;
      hitpos[0]=mouseDownPos[0]-pos[dt][0];
      hitpos[1]=mouseDownPos[1]-pos[dt][1];
      break;
    }
  }
  isRequestedDraw = true;
}
var handleMouseDragging = function(){
  if(hittile!=-1){
    var h=hittile;
    pos[h][0]=mousePos[0]-hitpos[0];
    pos[h][1]=mousePos[1]-hitpos[1];
  }
  isRequestedDraw = true;
}
var handleMouseUp = function(){
  hittile=-1;
  isRequestedDraw = true;
}

