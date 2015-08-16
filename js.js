var beginGame = function () {
  var boxes = document.getElementsByClassName('boxes');
  var playerTurn = 'x'

  boxes.addEventListener('click', function () {
    for (i = 0; i < boxes.length; i++) {
      document.getElementsByClassName('row')[i].innerHTML = playerTurn;
    }
  });
      

  var boxesContent = [];
  for (var i = 0; i < boxes.length; i++) {
    boxesContent.push(boxes[i].innerHtml);
  };

    var winner = function() {
      if ( (boxesContent[0] === boxesContent[1] && boxesContent[1] === boxesContent[2]) ||
         (boxesContent[3] === boxesContent[4] && boxesContent[4] === boxesContent[5]) ||
         (boxesContent[6] === boxesContent[7] && boxesContent[7] === boxesContent[8]) ||
         (boxesContent[0] === boxesContent[3] && boxesContent[3] === boxesContent[6]) ||
         (boxesContent[1] === boxesContent[4] && boxesContent[4] === boxesContent[7]) ||
         (boxesContent[2] === boxesContent[5] && boxesContent[5] === boxesContent[8]) ||
         (boxesContent[0] === boxesContent[4] && boxesContent[4] === boxesContent[8]) ||
         (boxesContent[2] === boxesContent[4] && boxesContent[4] === boxesContent[6]) ) {


  function playerTurn() {
      if (nextTurn === 'x') {
          nextTurn === 'o';
      } else {
          nextTurn = 'x';
      };

  };
}

beginGame;



        
  


