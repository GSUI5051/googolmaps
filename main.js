var initall=function(){
  initdraw();
  initgame();
  initevent();
};
var initgame=function(){
  tiles=tilelist.length;
  pos =new Array(tiles);
  sur =new Array(tiles);
  tile=new Array(tiles);
  dep =new Array(tiles);
  
  for(var t=0;t<tiles;t++){
    pos[t][0]=Math.floor(Math.random()*ww[0]);
    pos[t][1]=Math.floor(Math.random()*ww[1]);
    sur[t]=0;
    dep[t]=t;
    tile[t]=t;
  }
  shuffle(tile);
}
//physics
var tiles=0; //number of tiles
var pos; // pos[i] = position of i th tile
var sur; // sur[i] = surface of i th tile={0:back / 1:surface}
var dep; // dep[i] = depth of i th tile
var ww=new Array(2); // canvas size

