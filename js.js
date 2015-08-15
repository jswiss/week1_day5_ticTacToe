

  //1. Need to make it so when a box is clicked on, it will show 'x' or 'o' http://stackoverflow.com/questions/14882751/click-toggle-with-jquery-javascript

  //2. need to write out all winning combos

  //3. need to record x's and o's from each game in an array

  //4. Need to identify winning combos with a loop

  //5. need to change from player 1 to player two on every other click

  //6. Need to block off ability to re-click box

  //7. Need to track the score

  //8. Need a refresh button that resets the board --> I think we had one of these for 

  //9. need to make sure html/css doesn't go haywire

  //10. Maybe link the storage array to what is shown on the board, and use a button to clear the array, thus clearing the board?
var choices = ('x', 'o');

var boxes = document.getElementsByClassName('boxes');

boxes.addEventListener('click', function(x) {
  document.getElementsByClassName('boxes').innerHTML = 'x';
  console.log(boxes+'helloError');
});

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

wins[0][2];

//Write a function that records x values in exes, o values in o's
// var exes =  [];
// var ohs = [];





