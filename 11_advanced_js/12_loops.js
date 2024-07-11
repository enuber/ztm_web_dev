const basket = ['apples', 'oranges', 'grapes'];

const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000,
};

//for of loop
// iterating over an array or string
for (item of basket) {
  console.log(item);
}

//for in loop - loop over object properties. not iterating... it is enumerating.
for (item in detailedBasket) {
  console.log(item);
}

for (const [key, value] of Object.entries(detailedBasket)) {
  console.log(key, value);
}
