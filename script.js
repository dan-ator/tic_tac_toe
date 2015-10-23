$(document).ready(function(){

$("body").append("<h1>Tic! Tac! Random! Toe!</h1>");
$("body").append("<button type='button' class = 'resetButton'>Reset</button>");
$("body").append("<div class = 'game'> </div>");


for (var i = 1; i<=9; i++) {
    var gameBoard = $("<div class= 'squares'> </div>");
    $(".game").append(gameBoard);
  }

var clickCount = true;
function gamePlay(){
  console.log("clicked")
  // clickCount = true;
  if (clickCount===true) {
  $(this).html("x");
  clickCount=false;
} else {
  $(this).html("o");
  clickCount=true;
}
}

$(".squares").on("click", gamePlay);

$(".resetButton").on("click", function (){
  $(".squares").html("");
  $(".squares").on("click", gamePlay);
}
)

})
