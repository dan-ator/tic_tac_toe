$(document).ready(function(){

$("body").append("<h1>Tic! Tac! Toe!</h1>");
$("body").append("<button type='button' class = 'resetButton'>Reset</button>");
$("body").append("<div class = 'game'> </div>");


for (var i = 1; i<=9; i++) {
    var gameBoard = $("<div class= 'squares'> </div>");
    $(".game").append(gameBoard);
  }

var clickcount = 1;
function markSquare(){
  console.log("clicked")
  if (clickcount % 2===0) {
  $(this).text("x");
  $(this).off("click");
  clickcount++;
} else {
  $(this).text("o");
  $(this).off("click");
  clickcount++;
}
}

$(".squares").on("click", markSquare);

$(".resetButton").on("click", function (){
  $(".squares").text("");
  clickcount = 1;
  $(".squares").off("click");
  $(".squares").on("click", markSquare);
})

})
