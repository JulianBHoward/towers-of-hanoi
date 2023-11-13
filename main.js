var board = [
  [5, 4, 3, 2, 1],
  [],
  [] ];
 
 board.map(gameBoard);

var gameBoard = function(){
  board.forEach(function(peg,index){
    var index = index += 1;
    
    console.log("Peg " + index + ": " + peg.join(" "))
  })
  return gameBoard
};
  
  
var moveRing = function(current, target){
  var currentPeg = board[current];
  var targetPeg = board[target];

  if (currentPeg.length === 0){
    console.log("No rings to move.  Board:");
    gameBoard();
    return;
  }

  var Ring = currentPeg[currentPeg.length - 1];
  if (targetPeg.length === 0 || Ring < targetPeg[targetPeg.length - 1]){
    targetPeg.push(currentPeg.pop());
    console.log("That move was successful, board is now:")
  } else {
    console.log("You cannot move a larger disc on top of a smaller one, board is still:")
  }
  gameBoard();
}


var checkWinner = function(){
  if(board[2].length === 5)
  console.log('You are a winner!')
  return checkWinner;
}

checkWinner();
