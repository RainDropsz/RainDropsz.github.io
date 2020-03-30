var nwide = 16, nhght = 16;
var pctwide, pcthght, pxwide, pxhght;
var i = 0, j = 0;
var color1 = $("#colorChoice").val();
var colorText = $("#colorText").val();
var mode = 0;
var opacity = 0.1;

buildGrid(16,16);

function buildGrid(nwide, nhght) {

          //Remove previous grid
  $("#grid1").remove();
  
          //Add div #grid1 as grid container
  $("body").append('<div id="grid1"></div>');
  
  
  for(i=1;i<=nhght;i++) {
          //div .gridrow is row container
    $("#grid1").append('<div class="gridrow"></div>');

          //div .boxTp1 is each box in the row
    for(j=1;j<=nwide;j++) {
      $(".gridrow:last-child").
      append("<div class='boxTp1'></div>"); 
    } 
  }
         //fit boxes to screen
  addboxcss(nwide, nhght);
         //attach event listener to new grid 
  $(".boxTp1").mouseover(() => colorMode(event))  ;

}        //end of function buildGrd

function addboxcss(nwide, nhght) {
       //calculate Max width height for screen size
  pxwide = (.9*window.innerWidth / nwide -2) ;
  pxhght = (.8*window.innerHeight / nhght -2) ;

  pctwide = pxwide /  window.innerWidth * 100 + "%";
  pcthght = pxhght /  window.innerHeight * 100 + "vh";

  $(".boxTp1").css("width",  pctwide);
  $(".boxTp1").css("height", pcthght);
}

//Function for changing box colors
function colorMode(e) {
  var str0, numStart, curropc, newopc, rgba;


  if (mode == 0) {
    $(e.target).css("background-color", color1);}
  else if (mode == 1) {
    applyRandColor();
    $(e.target).css("background-color", color1);}
  else if (mode == 2) {
    str0 = $(e.target).css("background-color");
    numStart = (str0.lastIndexOf(",") + 1);
    curropc = (str0.slice(numStart));
    newopc = parseFloat(curropc) + 0.1;
    rgba = str0.slice(0, numStart) + newopc + ")";
    $(e.target).css("background-color", rgba);   


  }
}



//Event Listener: Make new grid
$("#mkGrd").submit( function() {
    buildGrid($("#gWid").val(), $("#gHgt").val());
  }
);

//Event Listener: Hover effect
//$(".boxTp1").mouseover(() => colorMode(event))  ;

//Event Listeners: color input, change label color
$("#colorChoice").on("change", 
  function() {
    mode = 0;
    color1 = $("#colorChoice").val();
    $("#lblcolor").css("background-color", color1);  
    $("#colorText").val(color1);
  }
);

//Event listener: Rainbow Mode
$("#rainbowbtn").on("click", () => applyRandColor());

function applyRandColor()  {        
    mode = 1;      
    color1 = "#" + Math.floor(Math.random()*16777215).
             toString(16);    // random color  
    $("#lblcolor").css("background-color", color1);  
    $("#colorText").val(color1); 
}

//Event Listener: Gradient Mode 
$("#gradbtn").on("click", 
  function() {
    gradinit();
    mode = 2;
  }
);

function gradinit() { 
  var str1;
  
  $(".boxTp1").each(
    function() {
      str1 = $(this).css("background-color");
      $(this).css("background", 
        convToRBGA(str1) );
     // $("body").append(
     //   $(this).css("background-color"));
    } 
  ); 
}

function convToRBGA(tmprgb)  {
  var newrgb = tmprgb.slice(0,3) + "a" + tmprgb.slice(3,tmprgb.length-1) + "," + 0 + ")";
  
  return newrgb;
}

//prevent reload page on form submit
$("#mkGrd").submit(function(e) { 
  e.preventDefault(); } );

//prevent enter key from submitting form on color input
$(window).keydown(
  function(event){ 
    if(event.keyCode == 13 && 
      $("#colorText").is(":focus")) { 
        event.preventDefault(); 
  
        mode = 0;
        $("#colorText").blur();
        color1 = $("#colorText").val();
        
        $("#lblcolor").css("background-color", color1);  
        $("#colorText").val(color1);
        return false; 
    }   
  }
);
