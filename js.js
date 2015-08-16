



  //Sort out currentPlayer issue
  //allow any box to be clicked, not just [0]
  //record the game in an array
  //compare game array to winning array
  //output winner

  //Need to record x's and o's from each game in an array

  //Need to identify winning combos with a loop

  //Need to track the score

  //Need a refresh button that resets the board --> I think we had one of these for rockpaperscissors

  //Need to make sure html/css doesn't go haywire


//returns array of boxes class
function readXO(boxes) {
  var boxes = document.getElementsByClassName('boxes');
  var gameEntries = [];
  for (var i = 0; i < boxes.length; i++) {
    gameEntries[i] = boxes[i];
    // gameEntries.push(boxes[i]);
  }
  return gameEntries;
}
readXO();


var game = function () {
  var x = 'x';
  var o = 'o';
  var wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  var currentPlayer = document.getElementById('currentPlayer');
  

  console.log(currentPlayer);

  boxes.addEventListener('click', function() {
    document.getElementsByClassName('boxes')[i].innerHTML = x;
    for (var i = 0; i < boxes.length; i++) {
          boxes[i].addEventListener('click', boxes, false);
    };
  //add return somewhere lower

});

// function changePlayer(){
// //changes player from X to O || O to X after each move

//  currentPlayer === x ? currentPlayer === o : currentPlayer === x;
//  document.getElementById('currentPlayer').innerHTML = currentPlayer;
// }


function boxClick(boxes) {
  if (boxes.innerHTML === x || boxes.innerHTML === o) {
    return;
   };
}   

changePlayer();

};

//Write a function that records x values in exes, o values in o's
// var exes =  [];
// var ohs = [];





