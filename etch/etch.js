//Draw Grid
//Number of boxes wide and high
const nwide = 16;
const nhght = 16;

var i =0, j = 0;


//Add div #grid1 as grid container
$("body").prepend('<div id="grid1"></div>');


for(i=1;i<=nhght;i++) {
  //div .gridrow is row container
  $("#grid1").append('<div class="gridrow"></div>');

  //div .boxTp1 is each box in the row
  for(j=1;j<=nwide;j++) {
    $(".gridrow:last-child").
    append("<div class='boxTp1'></div>"); 
  } 
}


//calculate Max width height for screen size
var pctwide = (90 / nwide) + '%';
var pcthght = (80 / nhght) + 'vh';

$(".boxTp1").css("width",  pctwide);
$(".boxTp1").css("height", pcthght);



//Hover effect

$(".boxTp1").mouseover(
  function(){
    $(this).css("background-color", "yellow"); 
  }
);

/*
$(".boxTp1").hover(
  function(){
    $(this).css("background-color", "yellow");},  
  function(){
    $(this).css("background-color", "yellow");}
);
*/