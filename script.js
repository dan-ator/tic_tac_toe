$(document).ready(function(){

$("body").append("<h1>Tic! Tac! Random! Toe!</h1>");
$("body").append("<button type='button' class = 'resetButton'>Reset</button>");
$("body").append("<div class = 'game'> </div>");


for (var i = 1; i<=9; i++) {
    var gameBoard = $("<div class= 'squares'> </div>");
    $(".game").append(gameBoard);
  }

var clickcount = 1;
function gamePlay(){
  console.log("clicked")
  clickcount++;
  if (clickcount%2===0) {
  $(this).html("x");
  $(this).off("click");
} else {
  $(this).html("o");
  $(this).off("click");
}
}

$(".squares").on("click", gamePlay);

$(".resetButton").on("click", function (){
  resetCount = true;
  if (resetCount === true) {
  $(".squares").html("");
  clickcount = 1;
  $(".squares").on("click", gamePlay);
  resetCount= false;

}

})

})
