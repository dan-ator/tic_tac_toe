$(document).ready(function() {

  $("body").append("<h1>Tic! Tac! Toe!</h1>");
  $("body").append("<button type='button' class = 'resetButton'>Reset</button>");
  $("body").append("<div class = 'game'> </div>");

  for (var i = 1; i <= 9; i++) {
    var gameBoard = $("<div class= 'squares'> </div>");
    $(".game").append(gameBoard);
  }

  var playerOne = prompt("What is the name of Player 1?");
  var playerTwo = prompt("What is the name of Player 2?");

  var clickCount = 1;

  function markSquare() {
    if (clickCount % 2 === 0) {
      $(this).text("x");
      $(this).off("click");
      clickCount++;
      alert("Now it is " + playerOne + "'s turn!");
    } else {
      $(this).text("o");
      $(this).off("click");
      clickCount++;
      alert("Now it is " + playerTwo + "'s turn!");
    }
  }

  $(".squares").on("click", markSquare);

  $(".resetButton").on("click", function() {
    $(".squares").text("");
    clickCount = 1;
    $(".squares").off("click");
    $(".squares").on("click", markSquare);
  })

})
