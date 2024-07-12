// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

function organize(arr) {
  const objNums = arr.reduce((acc, arr) => {
    acc[arr] = acc[arr] ? acc[arr] + 1 : 1;
    return acc;
  }, {});
  const finalArr = [];
  for (const [key, value] of Object.entries(objNums)) {
    if (value === 1) {
      finalArr.push(Number(key));
    } else {
      const subArr = [];
      for (let i = 0; i < value; i++) {
        subArr.push(Number(key));
      }
      finalArr.push(subArr);
    }
  }
  console.log(finalArr);
  return finalArr;
}
const organizedArray = organize(arr);

// ___________________________

function organize(input) {
  const numbers = input
    .filter((item) => typeof item === 'number')
    .sort((a, b) => a - b);
  const strings = input.filter((item) => typeof item === 'string').sort();

  function groupArray(arr) {
    const result = [];
    let subArray = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        subArray.push(arr[i]);
      } else {
        subArray.push(arr[i]);
        result.push(subArray.length > 1 ? subArray : subArray[0]);
        subArray = [];
      }
    }

    return result;
  }

  const groupedNumbers = groupArray(numbers);
  const groupedStrings = groupArray(strings);

  return [groupedNumbers, groupedStrings];
}

// Test cases
console.log(organize([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]));
console.log(organize([1, '2', '3', 2]));

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

function findPairWithSum(arr, target) {
  const numMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (numMap.has(complement)) {
      return [complement, arr[i]];
    }

    numMap.set(arr[i], i);
  }

  return null; // No pair found
}

// Test cases
console.log(findPairWithSum([1, 2, 3], 4)); // [1, 3]
console.log(findPairWithSum([1, 2, 3, 4, 5], 9)); // [4, 5]
console.log(findPairWithSum([1, 2, 3, 4, 5], 10)); // null

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-detect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

// Function to convert HEX to RGB
function hexToRgb(hex) {
  // Remove the leading '#' if it's there
  hex = hex.replace(/^#/, '');

  // Parse the hex string into integers
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return `rgb(${r}, ${g}, ${b})`;
}

// Function to convert RGB to HEX
function rgbToHex(r, g, b) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
}

// Function to auto-detect the format and convert
function convertColor(color) {
  // Check if the input is in HEX format
  if (color.startsWith('#')) {
    return hexToRgb(color);
  } else if (color.startsWith('rgb')) {
    // Extract the RGB values from the input string
    let rgb = color.match(/\d+/g).map(Number);
    return rgbToHex(rgb[0], rgb[1], rgb[2]);
  } else {
    return 'Invalid color format';
  }
}

// Test cases
console.log(convertColor('#FF5733')); // rgb(255, 87, 51)
console.log(convertColor('rgb(255, 87, 51)')); // #FF5733
console.log(convertColor('invalid')); // Invalid color format
