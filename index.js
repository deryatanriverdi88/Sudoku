let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let squareOne = document.getElementsByClassName("square-1");
let squareTwo = document.getElementsByClassName('square-2');
let squareThree = document.getElementsByClassName('square-3');
let firstRow = document.getElementsByClassName('row-1');
let secondRow = document.getElementsByClassName('row-2');
let squareOneArray = [...squareOne];
let squareTwoArray = [...squareTwo];
let squareThreeArray = [...squareThree];
let firstRowArray = [...firstRow];
let secondRowArray = [...secondRow];

shuffleNumbers = (array)=> {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };