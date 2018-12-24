/* Class GoogolMaps -------------------------*/
/* constructor */
var GoogolMaps = function(_can, _ctx){
  //draw
  var camview = [[1900,2020],[0,10]];
  var can = _can;
  var ctx = _ctx;
  //googology
  var func = []; //function list
}
var GoogolMaps.prototype.draw(){
  for(var fi=0;fi<this.func.length){
    var f=this.func[fi];
    x=f.envDate
    y=
  }
}
var GoogolMaps.prototype.test(){
  /* arrange a few large function */
  this.func=[
    new GoogolFunc(
      [
        ['0','zero.','en','https://en.wikipedia.org/wiki/0','(Mesopotamia)'],
        ['0','零。','ja','https://ja.wikipedia.org/wiki/0','(メソポタミア文明)']
      ],
      -500,undefined,undefined,
      null,null,"#ffffff"
    ),new GoogolFunc(
      ['Tetration','n^^2','en','https://en.wikipedia.org/wiki/Tetration'],
      ['テトレーション','n^^2','en','https://en.wikipedia.org/wiki/Tetration'],
      1901,undefined,undefined,
      null,null,"#ffcccc"
    ),new GoogolFunc(
      ['Graham's Number','G^64','en','https://googology.wikia.com/wiki/Graham%27s_number'],
      1977,undefined,undefined,
      null,null,"#ffcccc"
    )
  ];
}
/* Class GoogolFunc -------------------------
Class GoogolFunc is the class of googological functions.
  this.name[li]   = a list of names in language li.
  this.desc[li]   = a list of descriptions in language li.
  this.locale[li] = a list of locale in language li.
  this.desURL[li] = a URL which has this explanation.
  this.inventor[li] = inventor name in language li.
  this.inventorURL  = inventor's URL in language li.
  this.envDate  = a date on this is envisaged its concept.\
  this.defDate  = a date on these definition is completed.
  this.termDate = a date on this is proved to terminate.
  this.envURL   = a URL which is evidence of this.envDate.
  this.defURL   = a URL which is evidence of this.defDate.
  this.termURL  = a URL which is evidence of this.termDate.
  this.greaterThan = a function this is greater than.
  this.evolvedFrom = a function this evolved from.
  this.color       = color string for drawing. (ex. "#FF22FF")
*/
/* constructor */
var GoogolFunc=function(){
  this.name[0]
}

