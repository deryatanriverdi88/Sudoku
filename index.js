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

  shuffleNumbers(numbers);

  let firstRowAvailableNums = [];
  let firstRowNums = [];

  keepTrackOfNumbers = (rowArr, numsArr, type) =>{
	for(let i = 0; i < rowArr.length; i++){
		if(Number(rowArr[i].innerText) > 0){
			 numsArr.push(Number(rowArr[i].innerText));
		 };
  };
};

keepTrackOfAvailableNumbers = (availableNumsArr, numsArr)=>{
    for(let i =0; i < numbers.length; i++){
            if(!numsArr.includes(numbers[i] )){
        availableNumsArr.push(numbers[i]);
         };
    };
};

keepTrackOfNumbers(firstRowArray, firstRowNums);
keepTrackOfAvailableNumbers(firstRowAvailableNums,firstRowNums);

printFirstRow = (rowArray, rowAvailableNums) => {
	for(let i = 0; i < rowArray.length; i++){
   rowArray[i].innerText = rowAvailableNums[i];
 };
};

printFirstRow(firstRowArray, firstRowAvailableNums);
shuffleNumbers(numbers);

let squareOneNums = [];
let squareOneAvailableNums = [];
let squareTwoNums = [];
let squareTwoAvailableNums = [];
let squareThreeNums =[];
let secondRowNums = [];