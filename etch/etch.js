//Draw Grid
//Number of boxes wide and high
var nwide = 16, nhght = 16;
var pctwide, pcthght;
var i =0, j = 0;

buildGrid(16,16);

function buildGrid(nwide, nhght) {
$("#grid1").detach();
//Add div #grid1 as grid container
$("body").append('<div id="grid1"></div>');


for(i=1;i<=nhght;i++) {
  //div .gridrow is row container
  $("#grid1").append('<div class="gridrow"></div>');

  //div .boxTp1 is each box in the row
  for(j=1;j<=nwide;j++) {
    $(".gridrow:last-child").
    append("<div class='boxTp1'>"+j+"</div>"); 
  } 
}

//calculate Max width height for screen size
pxwide = (.9*window.innerWidth / nwide -2) + 'px';
pxhght = (.9*window.innerHeight / nhght -2) + 'px';

$(".boxTp1").css("width",  pxwide);
$(".boxTp1").css("height", pxhght);

//alert(pctwide + " " + window.innerHeight + " " + pcthght);
}

//when clrbtn clicked, clear grid & buildGrid
$("#clrbtn").submit( function() {
    buildGrid($("#gWid").val(), $("#gHgt").val());
  }
);

//prevent reload page on form submit
$("#clrbtn").submit(function(e) { 
  e.preventDefault(); } );


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