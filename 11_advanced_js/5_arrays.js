// advanced arrays

const array = [1, 2, 3, 4, 5];

// doesn't work like this. Just looping through the array.
// const newArr = array.forEach((num) => num * 2);
// console.log(newArr); //undefined.

// to correct...for each just loops over something and does whatever the function says
const double = [];
array.forEach((num) => double.push(num * 2));
console.log(double);

// map - loops over each item of array and returns a new array with some kind of change

const newArr = array.map((num) => num * 2);
console.log(newArr); //undefined.

// filter - loops over and returns things that meet a condition

const filteredArr = array.filter((num) => num >= 4);
console.log(filteredArr);

//reduce

const reducedNum = array.reduce((acc, num) => {
  return acc + num;
}, 0);
console.log(reducedNum);
