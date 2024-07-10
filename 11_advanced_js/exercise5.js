// Complete the below questions using this array:
const array = [
  {
    username: 'john',
    team: 'red',
    score: 5,
    items: ['ball', 'book', 'pen'],
  },
  {
    username: 'becky',
    team: 'blue',
    score: 10,
    items: ['tape', 'backpack', 'pen'],
  },
  {
    username: 'susy',
    team: 'red',
    score: 55,
    items: ['ball', 'eraser', 'pen'],
  },
  {
    username: 'tyson',
    team: 'green',
    score: 1,
    items: ['book', 'pen'],
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const namesArr = [];
array.forEach((item) => namesArr.push(item.username + '!'));

//Create an array using map that has all the usernames with a "? to each of the usernames
const namesArr2 = array.map((item) => item.username + '?');

//Filter the array to only include users who are on team: red

const teamRed = array.filter((item) => item.team === 'red');

//Find out the total score of all users using reduce

const totalScore = array.reduce((acc, item) => {
  return acc + item.score;
}, 0);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map((user) => {
  user.items = user.items.map((item) => {
    return item + '!';
  });
  return user;
});
console.log(answer);
