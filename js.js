console.log('linked');

  var boxes = document.getElementsByClassName('boxes');
  var box = document.getElementById('box7');
  console.log(boxes);
  var nextTurn = 'x'
  var showMoves = document.getElementsByClassName('boxes')[i].innerHTML = nextTurn;

function beginGame() {
  addEventListener();
}

function addEventListener(){
  for (var i = boxes.length - 1; i >= 0; i--) {
    // console.log(boxes, [i]);
    boxes[i].addEventListener("click", storeMoves);
    boxes[i].addEventListener("click", showMoves);
  }
}

function storeMoves() {
  console.log(this);
}

beginGame();

  // var boxesContent = [];
  // for (var i = 0; i < boxes.length; i++) {
  //   boxesContent.push(boxes[i].innerHtml);
  // };

//     var winner = function() {
//       if ( (boxesContent[0] === boxesContent[1] && boxesContent[1] === boxesContent[2]) ||
//          (boxesContent[3] === boxesContent[4] && boxesContent[4] === boxesContent[5]) ||
//          (boxesContent[6] === boxesContent[7] && boxesContent[7] === boxesContent[8]) ||
//          (boxesContent[0] === boxesContent[3] && boxesContent[3] === boxesContent[6]) ||
//          (boxesContent[1] === boxesContent[4] && boxesContent[4] === boxesContent[7]) ||
//          (boxesContent[2] === boxesContent[5] && boxesContent[5] === boxesContent[8]) ||
//          (boxesContent[0] === boxesContent[4] && boxesContent[4] === boxesContent[8]) ||
//          (boxesContent[2] === boxesContent[4] && boxesContent[4] === boxesContent[6]) ) {


function playerTurn() {
  if (nextTurn === 'x') {
      nextTurn === 'o';
  } else {
      nextTurn = 'x';
  } 
};

playerTurn();

